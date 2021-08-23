<template>
   <coingecko-coin-price-marquee-widget coin-ids="bitcoin,ethereum,binancecoin,cardano,dogecoin" currency="usd"
                                        background-color="#000000" locale="pt"
                                        font-color="#ffffff"></coingecko-coin-price-marquee-widget>

   <div class="container-fluid">

      <div class="px-4 py-5 my-5 text-center">
         <img class="d-block mx-auto mb-4 img-logo img-fluid" src="@/assets/_logo2.png" alt="logo">

         <ConnectWeb3/>

         <div class="col-lg-6 mx-auto">
            <p class="lead mb-4 ">Inspired by PooCoin, we are a currency with chart analysis services, display of your
               wallet tokens, new coin releases, token advertisements to be released and much more. We are preparing a
               lot more, we will no longer be a pump and dump coin, we will be forever and we want you on our side.</p>
            <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
               <button type="button" class="btn btn-primary btn-lg px-4 gap-3">Primary button</button>
               <button type="button" class="btn btn-outline-secondary btn-lg px-4">Secondary</button>
            </div>
         </div>
      </div>


      <div class="row align-items-start">
         <div class="col">

         </div>
         <div class="col">
            <coingecko-coin-heatmap-widget class="text-black" height="400" locale="en"
                                           top="50"></coingecko-coin-heatmap-widget>
         </div>
         <div class="col">

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

.img-logo {
   width: 850px;
}

</style>
