// Atribuição via Desestruturação é muito usada para extrair dados e já passar para uma variável.
// O principio é o mesmo, porém existe algumas funcionalidades como passar um valor padrão.

const pessoa = {
  name: 'André',
  lastname: 'Andrade',
  age: 27,
  address: {
    road: 'Rua Nicolau Rodrigues',
    number: 306
  }
}

// Formas de fazer a extração dos dados.
const {
  // Extraindo name para dentro da variável name.
  //name,
  // Extraindo e caso não venha resultados tenha um valor padrão. Para não vir com valor undefined.
  //name = '',
  // Renomeando a variável
  name: n,
  // Extraindo dados de um objeto dentro de outro objeto.
  address: {road, number},
  address
} = pessoa

// Visualizando o Objeto.
console.log(pessoa)
console.log(address)

console.log(`Exibindo dados extraídos: ${n}`)
