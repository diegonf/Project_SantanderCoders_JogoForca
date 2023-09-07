import { Partida } from "./Partida.js";
import { palavras } from "./palavras.js";

// Gerar um índice aleatório
const indiceAleatorio = Math.floor(Math.random() * palavras.length);

// Acessar o item aleatório da lista
const palavraAleatoria = palavras[indiceAleatorio];
const round = new Partida(palavraAleatoria.palavra, palavraAleatoria.dica);
const listaDeTeclas = document.querySelectorAll(".key");

listaDeTeclas.forEach((tecla) => {
  tecla.addEventListener("click", () => {
    console.log(tecla.value);
    round.checarletraPalavra(tecla.value);
    console.log(round.posicao);
  });
});

console.log(palavraAleatoria.palavra);
console.log(round.listaLetra);
console.log(round.tamanho);
// console.log(round.posicao);

const result = [];
for (let i = 0; i < round.posicao.length; i++) {
  const element = round.posicao[i];
  result.push(element ? element : "_");
}
console.log("result: ", result);

const trocar = document.querySelector("#button");
const img = document.querySelector("#boneco");

let contador = 1;
trocar.addEventListener("click", () => {
  img.src = `./assets/${contador}.png`;
  contador++;
});
