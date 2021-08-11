<template>
   <div class="contador">
      <span>{{contador}}</span>
      <button @click="somar">+</button>
      <button @click="diminuir">-</button>
   </div>
</template>

<script>
export default {
   name: "Contador",
   data() {
      return {
         contador: 0
      }
   },
   methods: {
      somar() {
         this.contador++
      },
      diminuir() {
         this.contador--
      }
   }
}
</script>

<style scoped>
   .contador span {
      border-bottom: 1px solid #CCC;
      height: 30px;
      padding: 5px 25px;
   }

   .contador button {
      height: 30px;
      width: 30px;
      border-radius: 15px;
      background-color: rebeccapurple;
      color: white;
      margin-left: 10px;
      outline: none;
   }
</style>