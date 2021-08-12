// Existem alguns tipos de formas de declarar funções
// Função declarativa
// Aqui temos o mesmo caso de declarar com let ou const, o Hoisting Function, sempre que uma função é declarada dessa
// forma o motor (engine) do JavaScript sobe o nível, joga pra cima na hora da execução, ou seja tanto faz chamar
// a função antes ou depois da declaração da função.

function funcaoDeclarativa() {
  console.log('Sou uma função declarativa.')
}

funcaoDeclarativa()

// First-Class Function (Função de primeira classe)
// Function Expression

const funcaoEmVariavel = function () {
  console.log('Sou um Dado')
}
funcaoEmVariavel()

// Forma de executar uma função dentro de outra
function executaFuncao(funcao) {
  console.log('Vai executar a função abaixo:')
  funcao()
}

executaFuncao(funcaoEmVariavel)

// Função Arrow (Arrow Function)
const funcaoArrow = () => {
  console.log('Sou uma Arrow Function')
}
funcaoArrow()

// setInterval(function () {
//   funcaoArrow()
// }, 1000)

// Dentro de um Objeto

const obj = {
  falarOi:
    function falar() {
      console.log('Sou uma função dentro de um Objeto.')
    },
  falarDois() {
    console.log('Sou a função 2 dentro do objeto.')
  }
}

obj.falarOi()
obj.falarDois()