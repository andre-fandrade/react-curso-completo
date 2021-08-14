<template>

   {{ contractDetails.totalSupply }}
   {{ contractDetails.name }}
   {{ contractDetails.symbol }}

   <hr>

   {{ timer }}

   <button @click="contractDetails.totalSupply += 1 ">alterar</button>

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
            name: '',
            symbol: '',
            totalSupply: ''
         },
         timer: 0
      }
   },
   watch: {},

   methods: {
      convertToNumber(string) {
         const cFromWei = web3.utils.fromWei(string, 'Gwei')
         const cFloat = parseFloat(cFromWei)
         return cFloat.toLocaleString('en-US')
      },
      async contractCall() {

         const sAwait = CONTRACT.methods.totalSupply().call()
         const nAwait = CONTRACT.methods.name().call()
         const symAwait = CONTRACT.methods.symbol().call()

         const supply = await sAwait

         this.contractDetails.totalSupply = this.convertToNumber(supply)
         this.contractDetails.name = await nAwait
         this.contractDetails.symbol = await symAwait

         web3.eth.getBlock('latest').then(console.log)


         this.timer += 1

      }
   },
   created() {
      this.contractCall()
   }
}
</script>