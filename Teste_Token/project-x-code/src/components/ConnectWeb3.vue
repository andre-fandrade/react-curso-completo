<template>


   <div class="row justify-content-center">
      <div class="col">
         <h4>My Coin Token</h4>
      </div>
   </div>

   <div class="row justify-content-center">
      <div class="col text-center">
         <p>With supporting text below as a natural lead-in to additional content.</p>
         <p>TotalSupply: {{ contractDetails.totalSupply }}</p>
         <p>TotalBurned: {{ contractDetails.totalBurn }}</p>
         <p>TotalFee: {{ contractDetails.totalFees }}</p>
      </div>
   </div>


</template>

<script>

import CONTRACT from "../Utils/ContractConnect";
import web3 from "../Utils/Web3Config";


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
         timer: 0
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
             .then((data) => {console.log(data)})


         this.timer += 1

      }
   },
   created() {
      this.contractCall()
      setInterval(() => {
         this.contractCall()
      }, 30000)
   }
}
</script>
