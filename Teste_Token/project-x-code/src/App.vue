<template>

   <div class="container">
      <div class="row align-items-start">
         <div class="col">
            <img
                src="https://i1.wp.com/multarte.com.br/wp-content/uploads/2015/08/imagens-amor.jpg?fit=1680%2C1050&ssl=1"
                class="img-thumbnail" alt="...">
         </div>
         <div class="col">
            <ConnectWeb3/>
         </div>
         <div class="col">
sssss
         </div>
      </div>
   </div>


</template>

<script>
import ConnectWeb3 from "@/components/ConnectWeb3";

export default {
   name: 'App',
   components: {
      ConnectWeb3
   }
}
</script>

<style>

body {
   font-family: Nunito, Helvetica, Arial, sans-serif;
}

</style>
