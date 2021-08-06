<template>
   <div class="Connect">
      <p> ok google! {{dataDeHoje}}</p>
      <p>{{teste}}</p>

   </div>
</template>

<script>
export default {
   name: 'ConnectWallet',

   data() {
      return {
         dataDeHoje: new Date(),

      }
   },


   props: {
      teste: String
   }
}
</script>

<style scoped>

</style>