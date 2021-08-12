// Array Map retorna o mesmo tamanho do array porém com modificações.

const numbers = [80, 23, 45, 34, 1, 2, 3, 4, 5, 78, 99, 99]

const numbersMap = numbers.map(valor => valor * 2)

console.log(numbersMap)

const pessoas = [
  {nome: 'Geovana', idade: 6},
  {nome: 'Luisa', idade: 71},
  {nome: 'Ana', idade: 27},
  {nome: 'Borke', idade: 95},
  {nome: 'Marcim', idade: 61},
]

const pessoasMap = pessoas.map(function (obj) {
    // a palavra reservada delete, remove a chave do array.
    // delete obj.nome
    return `${obj.nome} E ${obj.idade}`
})

console.log(pessoasMap)

