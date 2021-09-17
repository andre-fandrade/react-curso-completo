// Funções são projetadas para executar uma tarefa ou para criar códigos que serão
// reutilizados várias vezes.

function mostrar(texto) {
  console.log(texto);
}

function executaTarefa(texto, address, rua, numero) {
  mostrar(texto);
  mostrar(address);
  mostrar(rua);
  mostrar(numero);

  document.querySelector(".h-p").innerHTML = texto;
}

executaTarefa(
  "Não sei como mais aconteceu...",
  "kodec_andrade@hotmail.com",
  "Rua 3",
  "306"
)

function enviandoSegundo(event) {

  mostrar(event)

  const texto = document.querySelector(".h-p").innerHTML;
  mostrar(texto);
  document.querySelector(".h-p2").innerHTML = texto;
}

function soma(numero) {
  const n = numero + 123;
  const n2 = n * 6;
  const n3 = n2 - 5;

  return n3;
}

function disparoUm(n) {
  n === undefined ? mostrar('Error.') : mostrar(soma(n));
  mostrar(2222)
}

// var confirma = confirm("Hoje é Sabado?");
// var entrada = prompt("Digite algo:");

// if (confirma === true) {
//   document.querySelector(".input-teste").value = "222222";
// }

// localStorage.getItem("andre")
window.localStorage.setItem("nome", "d")

mostrar(window.localStorage)
window.localStorage.clear()
mostrar(localStorage)

for(i = 0; i <= 5; i++) {
  mostrar(i + i)
}

const Carro = {

  constructor(modelo, tipo) {
    this.modelo = modelo;
    this.tipo = tipo;
  },

  modelo: "Vectra",
  tipo: "Sedan"
};

const carro_2 = new Carro("Mercedes","Hatch");

mostrar(carro_2)


