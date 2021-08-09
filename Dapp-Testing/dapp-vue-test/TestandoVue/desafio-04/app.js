new Vue({
  el: '#desafio',
  data: {
    encolher: 'encolher',
    destaque: 'destaque',
    iniciarEfeito: false,
    font: 'font',
    color: 'color',
    exemplo: 'exemplo destaque',
    exUm: '',
    exDois: false,
    progresso: 10,
    barraProgresso: 'width: 1px'
  },
  methods: {
    iniciarProgresso() {
      const tempo = setInterval(() => {
        this.progresso++
        this.barraProgresso = `width: ${this.progresso}%`

        if (this.progresso == 100) {
          clearInterval(tempo)
        }
      }, 1000)
    }
  },
  computed: {
    estiloUm() {
      return {
        fontSize: '30px'
      }
    },
    estiloDois() {
      return {
        color: 'red'
      }
    },
    estiloTres() {
      return {
        'background-color': 'gray',
        width: '50px !important',
        height: '50px',
      }
    },
  }
})
