<template>
   <button
       class="btn"
       :class="bColor">
      {{ bName }}
   </button>
</template>

<script>
export default {
   name: "Button",
   props: {
      bColor: String,
      bName: String
   }
}
</script>

<style scoped>

</style>