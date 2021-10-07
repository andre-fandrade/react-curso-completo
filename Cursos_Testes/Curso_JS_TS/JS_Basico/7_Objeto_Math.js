const clog = require('../config');

let num1 = 9.46154;
let num2 = 5.456;
let num3 = 5.654;
// Arredondamento:
clog('Para Baixo .floor:', Math.floor(num1));
clog('Para Cima .ceil:', Math.ceil(num1));
// Com o metódo round é de forma automática, tudo vai depender do número anterior:
clog(`.round para ${num2}:`, Math.round(num2));
clog(`.round para ${num3}:`, Math.round(num3));
// Descobrindo Máximo e Mínimo:
clog('Maior Número .max:', Math.max(1, 65, 4, 15, -95, -153));
clog('Menor Número .min:', Math.min(1, 65, 4, 15, -95, -153));
// Gerando números aleatórios:
clog('Gerando com .random:', Math.random());
clog('Gerando com .random entre 5 e 10:', Math.random() * (10 - 5) + 5);
clog('Gerando com .random entre 5 e 10 / Arredondando com .round:',
  Math.round(Math.random() * (10 - 5) + 5));
// Elevando um valor a outro, potenciação:
clog('Potenciação com .pow:', Math.pow(2, 10));

