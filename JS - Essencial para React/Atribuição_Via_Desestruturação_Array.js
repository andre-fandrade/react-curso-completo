// Atribuição via desestruturação Array
// ... rest (Junta o Resto do Array em outra variável) ... spread
// Array simples
// Para pular e buscar o valor da frente basta utilizar [um,(valor vazio),tres, , , seis]

const letras = ['A', 'B', 'C', 'D']
const [letraA, letraB, ...restoDasLetras] = letras

console.log(`Exibindo array simples: ${letras}`)
console.log(`Extraindo simples: ${letras[1]}`)
console.log(`Extraindo via desestruturação: ${letraA}`)
console.log(`Exibindo o resto: ${restoDasLetras}`)

// Array composto de mais de um array
const numbers = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
const [,,[,oito]] = numbers

console.log(`\nExibindo array composto: ${numbers}`)
console.log(`Extraindo composto: ${numbers[2][2]}`)
console.log(`Extraindo via desestruturação ${oito}`)

// Diferença entre Atribuição via desestruturação Array[] e Objeto{} é [] para {}
// Atribuição via desestruturação Objetos



