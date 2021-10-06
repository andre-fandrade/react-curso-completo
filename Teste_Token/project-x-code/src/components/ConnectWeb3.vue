<template>

   <div class="row justify-content-center">
      <div class="col text-center">
         <p>TotalSupply: {{ contractDetails.totalSupply }}</p>
         <p>TotalBurned: {{ contractDetails.totalBurn }}</p>
         <p>TotalFee: {{ contractDetails.totalFees }}</p>
      </div>
   </div>

   <button @click="getAllBalances">Ver Balanço</button>

   <div v-if="loading" class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
   </div>

   <ol v-for="(balance, index) in allBalanceWallet" :key="balance.name" class="list-group">
      <li class="list-group-item d-flex justify-content-between align-items-start">
         <div class="ms-2 me-auto">
            <div class="fw-bold">{{ balance.name }}</div>
            {{ balance.value }}
         </div>
         <span class="badge bg-primary rounded-pill">{{ index + 1 }}</span>
      </li>
   </ol>

</template>

<script>

import CONTRACT from "../Utils/ContractConnect";
import web3 from "../Utils/Web3Config";
import {GraphQLClient, gql} from 'graphql-request';
import confBQ from '../Utils/confBitQuery';


// CONTRACT.methods.balanceOf('0xd26114cd6EE289AccF82350c8d8487fedB8A0C07').call((err, result) => { console.log(result) })
// CONTRACT.methods.totalSupply().call((err, result) => { console.log(result) })

export default {
   name: "ConnectWeb3",
   data() {
      return {
         contractDetails: {
            totalBurn: '',
            totalFees: '',
            totalSupply: ''
         },
         timer: 0,
         allBalanceWallet: [],
         loading: false
      }
   },
   watch: {},

   methods: {
      convertToNumber(string, typeUnit, localeString) {
         const cFromWei = web3.utils.fromWei(string, typeUnit)
         const cFloat = parseFloat(cFromWei)
         if (localeString) {
            return cFloat.toLocaleString('en-US')
         } else {
            return cFromWei
         }

      },
      async contractCall() {

         const sAwait = CONTRACT.methods.totalSupply().call()
         const bAwait = CONTRACT.methods.totalBurn().call()
         const fAwait = CONTRACT.methods.totalFees().call()

         const supply = await sAwait
         const burn = await bAwait
         const fee = await fAwait

         this.contractDetails.totalSupply = this.convertToNumber(supply, 'Gwei', true)
         this.contractDetails.totalBurn = this.convertToNumber(burn, 'Gwei', true)
         this.contractDetails.totalFees = this.convertToNumber(fee, 'Gwei', true)

         web3.eth.getBlock('latest').then(console.log)

         const getBalance = web3.eth.getBalance('0x840b41C62A8757Eb359bC1272eCaD424bb64AC0A')
         const b2 = await getBalance;
         const balence = this.convertToNumber(b2, 'Ether')
         console.log(balence)

         const API_KEY = 'NMBD6EDMB1V785A78P1XC5SJ3XQZ4UFM8W'

         const ADD_CON = '0xbc5a37d1bbe5f2a9e1cdf9af21194a5cd669420f'

         fetch(`https://api.bscscan.com/api?module=token&action=tokenholderlist&contractaddress=${ADD_CON}&page=1&offset=10000&apikey=${API_KEY}`)
             .then((data) => {
                console.log(data)
             })


         this.timer += 1


      },
      async getAllBalances() {

         const graphQLClient = new GraphQLClient(confBQ.endpoint, {
            headers: {
               authorization: `${confBQ.header_name} ${confBQ.api_bitquery}`,
            },
         })

         const variables = {
            "limit": 10,
            "offset": 0,
            "network": "bsc",
            "address": "0x840b41C62A8757Eb359bC1272eCaD424bb64AC0A"
         }

         const query = gql`query ($network: EthereumNetwork!, $address: String!) {
                                ethereum(network: $network) {
                                  address(address: {is: $address}) {
                                    balances {
                                      currency {
                                        address
                                        symbol
                                        name
                                        decimals
                                      }
                                    }
                                  }
                                }
                              }`

         const data = await graphQLClient.request(query, variables)
         const dataArray = data.ethereum.address[0].balances


         async function getValue(contractAddress) {
            const apik = 'NMBD6EDMB1V785A78P1XC5SJ3XQZ4UFM8W'
            const adrs = '0x840b41C62A8757Eb359bC1272eCaD424bb64AC0A'
            const url_getValue = `https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=${contractAddress}&address=${adrs}&tag=latest&apikey=${apik}`

            const dataResponse = fetch(url_getValue)
            const [dataPromise] = await Promise.all([dataResponse])
            const dd = await dataPromise.json()
            // const ddValue = this.convertToNumber(dd.result,'Ether')
            return dd.result

         }


         let index = 0
         const allBalanceWallet = []
         this.loading = true

         while (index < dataArray.length) {
            if (dataArray[index].currency.symbol !== 'BNB') {

               const valeuResult = await getValue(dataArray[index].currency.address)
               console.log(typeof(valeuResult), valeuResult)

               if (valeuResult === 'Max rate limit reached' ) {
                  const dataBalance = {
                     name: dataArray[index].currency.name,
                     value: await getValue(dataArray[index].currency.address)
                  }

                  allBalanceWallet.push(dataBalance)
               }



            }
            index++
         }

         this.loading = false
         this.allBalanceWallet = allBalanceWallet;

         // https://github.com/prisma-labs/graphql-request#authentication-via-http-header
         // https://graphql.bitquery.io/ide#
         // https://explorer.bitquery.io/bsc/token/0xd9025e25bb6cf39f8c926a704039d2dd51088063/transfers

      }

   },
   created() {
      this.contractCall()
      setInterval(() => {
         this.contractCall()
      }, 60000)
   }
}
</script>
