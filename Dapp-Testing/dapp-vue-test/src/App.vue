<template>

   <div id="app" class="container">
      <div class="row">
         <div class="col">
            <ConnectWallet
                v-bind:teste="veioDoApp"
            />
         </div>
         <div class="col">
            <EventoV1/>
         </div>
         <div class="col">
            <EventoV2/>
         </div>
      </div>
      <div class="row">
         <div class="col">
            <PropriedadesReativas/>
         </div>
      </div>
   </div>

</template>

<script>
import ConnectWallet from "@/components/ConnectWallet";
import EventoV1 from "@/components/EventoV1";
import EventoV2 from "@/components/EventoV2";
import PropriedadesReativas from "@/components/PropriedadesReativas";

export default {
   name: 'App',

   components: {
      ConnectWallet,
      EventoV1,
      EventoV2,
      PropriedadesReativas,
   },

   data() {
      return {
         veioDoApp: 'Veio do App essa Mensagem.'
      }
   },

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
