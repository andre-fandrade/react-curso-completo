<template>
   <div>
      <p v-on:mousemove="mouseevent">Mouse Move - X:{{ x }} e Y:{{ y }} |</p>
   </div>
</template>

<script>
export default {
   name: "EventoV2",

   data() {
      return {
         x: 0,
         y: 0
      }
   },
   methods: {
     mouseevent: function (event) {
        const { clientX, clientY} = event
        this.x = clientX
        this.y = clientY
     }
   }
}
</script>

<style scoped>

</style>