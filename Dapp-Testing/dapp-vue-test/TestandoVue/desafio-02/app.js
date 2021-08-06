new Vue({
    el: '#desafio',
    data: {
        valor: 0,
        valor2: 0
    },
    methods: {
        cliqueDoBotao: function () {
            alert('Você clicou no botão!')
        },
        OuvirEventoKeyDown: function (e) {
            // Pegar o valor que esta sendo digitado.
            this.valor = e.target.value
        },
        OuvirEventoKeyDown2: function (e) {
            // Pegar o valor que esta sendo digitado.
            this.valor2 = e.target.value
        }
    }
})