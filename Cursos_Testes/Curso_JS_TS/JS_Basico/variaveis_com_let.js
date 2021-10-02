function cl(t) {
  console.log(t)
}

/* let e const */

// Não pode ser criada com palavras reservadas
// Não pode começar o nome com um número
// Não pode conter espaços ou traços
// Utilizamos camelCase
// São Case-sensitive

/* let */

// Pode ser declarada e depois atribuída ou modificada

let nome;

nome = 'Atribuição';

cl('LET ' + nome);

nome = 'Modificação';

cl('LET ' + nome);

/* const */

// Deve ser declarada e atribuído ao mesmo tempo

const nome_2 = 2;

cl('CONST ' + nome_2)


// nome_2 = nome_2 + 2

let nome_3;

nome_3 === undefined ? cl('Yes') : cl('No')



