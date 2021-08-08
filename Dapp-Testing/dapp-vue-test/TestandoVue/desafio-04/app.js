new Vue({
  el: '#desafio',
  data: {
    encolher: 'encolher',
    destaque: 'destaque',
    iniciarEfeito: false,
		font: 'font',
		color: 'color'
  },
  methods: {
    iniciarProgresso() {

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
		}
  }
})
