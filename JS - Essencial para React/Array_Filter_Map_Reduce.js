// Array Filter uma filtrando dentro de um array
// Um array filter só pode retornar um valor igual ou menor que seu array original

const numbers = [80, 23, 45, 34, 1, 2, 3, 4, 5, 78, 99, 99]

// function callbackFilter(valor, index, array ) {
//   if (valor > 10) { return true }
// }

const numberMiorQueDez = numbers.filter((valor) => valor > 10)

console.log(numberMiorQueDez)

const pessoas = [
  {nome: 'Geovana', idade: 6},
  {nome: 'Luisa', idade: 71},
  {nome: 'Ana', idade: 27},
  {nome: 'Borke', idade: 95},
  {nome: 'Marcim', idade: 61},
]

// const callBackFilter = (dados) => {
//   const {nome, idade} = dados
//   return nome.length === 3 && idade === 27
// }

const pessoasDois = pessoas.filter(
  dados => {
    const {nome, idade} = dados
    return nome.length >= 4
  }
)
console.log(pessoasDois)

pessoasDois.map(dados => {
    // const {nome, idade} = dados
    console.log(`Meu nome é: ${dados.nome}`)
  }
)

// ---------------------------------------------------------------------------------
