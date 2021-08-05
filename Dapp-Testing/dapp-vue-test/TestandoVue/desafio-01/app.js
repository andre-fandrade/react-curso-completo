new Vue({
  el: "#desafio",
  data: {
    SEU_NOME: 'André Felipe',
    IDADE: 27,
    IMAGEM: 'https://static-cse.canva.com/blob/183499/IMAGE-1.jpg'
  },
  methods: {
    NUMERO_RAND: function () {
      return Math.random()
    }
  }
})