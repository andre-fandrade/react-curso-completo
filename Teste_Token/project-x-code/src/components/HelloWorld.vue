<template>
   <div>
      {{nome}}

      <Button
          bName="Meu Botão"
          bColor="btn-danger"
      />

      <ConnectWeb3/>


   </div>
</template>

<script>
import Button from "./Button";
import ConnectWeb3 from "./ConnectWeb3";

export default {
   name: 'HelloWorld',
   data() {
      return {
         nome: this.msg
      }
   },
   props: {
      msg: String
   },
   components: {
      Button: Button,
      ConnectWeb3: ConnectWeb3
   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
   margin: 40px 0 0;
}

ul {
   list-style-type: none;
   padding: 0;
}

li {
   display: inline-block;
   margin: 0 10px;
}

a {
   color: #42b983;
}
</style>
