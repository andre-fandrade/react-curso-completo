<template>
   <div>
      <button type="button"
              v-on:click="adicionar"
              class="btn btn-primary">Enviar
      </button>

      <div class="input-group flex-nowrap">
         <span class="input-group-text">{@}</span>
         <input type="text" kdc
                class="form-control">
      </div>
      {{tabela()}}
   </div>
</template>

<script>
export default {
   name: "PropriedadesReativas",

   data() {
      return {
         nome: 'Nome',
         array: []
      }
   },

   methods: {
      adicionar() {

         const novo = document.querySelector('[kdc]').value

         this.array.push(novo)


         console.log(this.array)
      },

      tabela() {
         this.array.map(() => {
               console.log('dddd')
             }
         )
      }
   }
}
</script>

<style scoped>

</style>