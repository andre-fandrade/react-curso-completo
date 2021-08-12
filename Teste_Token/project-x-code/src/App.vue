<template>
   <div class="container">
      <div class="row">
         <div class="col">
            <HelloWorld msg="ANDRE"/>
         </div>
         <div class="col">
            Column
         </div>
         <div class="col">
            Column
         </div>
      </div>
   </div>

</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
   name: 'App',
   components: {
      HelloWorld
   }
}
</script>

<style>
#app {
   font-family: Avenir, Helvetica, Arial, sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   text-align: center;
   color: #2c3e50;
   margin-top: 60px;
}
</style>
