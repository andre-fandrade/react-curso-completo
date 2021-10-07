const clog = require('../config');

// Forma de Escapar uma string:
let umaString = "Um \"Texto\"";
clog('ESCAPE: ', umaString);

// Strings tem índice:
//           012345678... Retorna undefined se não existir valor.
umaString = "Texto Teste";
clog('INDICE: ', umaString[3]);
clog('INDICE 2: ', umaString.charAt(6));
// IndexOf mostra apartir de qual índice eu encontro determinada palavra, letra...
// -1 quer dizer que não foi encontrado.
clog('INDICE 3:', umaString.indexOf('Teste'));
//                         Quero encontrar: Apartir do índice:
clog('INDICE 4:', umaString.indexOf('Teste', 7));
// Faz mesma coisa porém de trás para frente.
clog('INDICE 5:', umaString.lastIndexOf('Teste', 7));
// Usando Expressões Regulares
clog('REGEX .match:', umaString.match(/[a-z]/));
clog('REGEX .search:', umaString.search(/e/));
// Substituindo valores.
clog('REGEX .replace:', umaString.replace(/e/, 'rrrr'));
// Fatiando valores dentro da String.
clog('REGEX .slice:', umaString.slice(1, 5));
clog('REGEX .slice:', umaString.slice(-5, -1));
// Separando em um array cada valor apartir do valor da separação.
clog('REGEX .split:', umaString.split('t'));
// Formatando Strings
clog('UperCase:', umaString.toUpperCase());
clog('LowerCase:', umaString.toLowerCase());


let str = 'mminha vida, vida mminha, mmommentos bomms.'

let c = 0;
while (c < str.length) {

  if (str.search('mm') !== -1) {

    str = str.replace('mm', 'm')

    console.log('achei.');
  }

  c++;
}


str = str.replace('mm', 'm')
console.log(str.search('mm') !== -1)


