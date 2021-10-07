const clog = require('../config');

let num1 = 1234;
let num2 = 2.512649;



clog('Somando Números: ', num1 + num2);
// Transformando number em string
num3 = num1.toString();
num4 = num2.toString();
clog('Somando Strings: ', num3 + num4);
clog('Number to String: ', num1, num2);
// Representação binária do valor:
clog('Binário .toString(2):', num1.toString(2));
// Arredondando casas decimais:
clog('Decimal .toFixed(2):', num2.toFixed(2));
// Verificando se determinado valor é inteiro:
num5 = 1
clog('Número Inteiro Number.isInteger(): ' + `Number: ${num5} -`, Number.isInteger(num5));
// Verificando Not a Number:
let temp = 5 * 'olá';
clog('is NaN Number.isNaN:', Number.isNaN(temp));


