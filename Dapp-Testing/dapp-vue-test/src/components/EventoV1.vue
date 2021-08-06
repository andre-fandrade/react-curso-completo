<template>
   <div>
      <p>{{ contador }}</p>
      <button v-on:click="somar(3)">Somar</button>
   </div>
</template>

<script>
export default {
   name: "EventoV1",

   data() {
      return {
         contador: 0,
      }
   },
   methods: {
      somar: function (passo) {
         return this.contador += passo
      }
   }
}
</script>

<style scoped>

</style>