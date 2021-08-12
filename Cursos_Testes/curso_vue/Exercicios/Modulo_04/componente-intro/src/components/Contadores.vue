<template>

   <h1>Contadores</h1>
   <hr>
   <Contador v-for="c in 5" :key="c"/>

</template>

<script>
// Registro Localii
import Contador from "./Contador";

export default {
   name: "Contadores",
   components: {
      'Contador': Contador
   }
}
</script>

<style scoped>

</style>