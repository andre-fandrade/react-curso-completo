<template>

   {{ totalSupply }}
</template>

<script>

import CONTRACT from "../Utils/ContractConnect";


CONTRACT.methods.name().call((err, result) => {
   console.log(result)
})

CONTRACT.methods.symbol().call((err, result) => {
   console.log(result)
})
// contract.methods.balanceOf('0xd26114cd6EE289AccF82350c8d8487fedB8A0C07').call((err, result) => { console.log(result) })


export default {
   name: "ConnectWeb3",
   data() {
      return {
         totalSupply: this.tSupply(),
         name: '',
         symbol: '',
      }
   },
   methods: {
      async tSupply() {
         await CONTRACT.methods.totalSupply()
             .call((result) => {
                return result
             })
             .catch((err) => {

                const obj = JSON.parse(err)
                console.log(obj)

             })
      }
   }
}
</script>