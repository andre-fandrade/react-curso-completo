<template>
   <div id="app">
      <!--    <img alt="Vue logo" src="./assets/logo.png">-->
      <ConnectWallet
          v-bind:teste="veioDoApp"
      />
      <hr>
      <EventoV1 />
      <hr>
      <EventoV2 />
      <hr>
   </div>
</template>

<script>
import ConnectWallet from "@/components/ConnectWallet";
import EventoV1 from "@/components/EventoV1";
import EventoV2 from "@/components/EventoV2";

export default {
   name: 'App',

   components: {
      ConnectWallet,
      EventoV1,
      EventoV2,
   },

   data() {
      return {
         veioDoApp: 'Veio do App essa Mensagem.'
      }
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
