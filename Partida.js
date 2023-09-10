import { palavras } from "./palavras.js";
import { Interface } from "./Interface.js";

export class Partida {
  #palavra;
  #dica;
  #tamanho;
  #pontuacao;
  #tentativa;
  #listaLetra = [];
  #posicao;
  constructor(palavra, dica) {
    this.#palavra = palavra.toLowerCase();
    this.#dica = dica;
    this.#tamanho = this.palavra.length;
    this.#pontuacao = 0;
    this.#tentativa = 6;
    this.#posicao = [];
  }

  init() {
    for (let i = 0; i < this.tamanho; i++) {
      this.#posicao[i] = "_";
    }
    Interface.imprimir(this.#tamanho, this.#posicao, true);
  }

  chamar() {
    Interface.imprimir(this.#tamanho, this.#posicao);
  }

  get palavra() {
    return this.#palavra;
  }

  set palavra(palavra) {
    this.#palavra = palavra;
  }

  get dica() {
    return this.#dica;
  }

  set dica(dica) {
    this.#dica = dica;
  }

  get tamanho() {
    return this.#tamanho;
  }

  set tamanho(tamanho) {
    this.#tamanho = tamanho;
  }

  get pontuacao() {
    return this.#pontuacao;
  }

  set pontuacao(pontuacao) {
    this.#pontuacao = pontuacao;
  }

  get tentativa() {
    return this.#tentativa;
  }

  set tentativa(tentativa) {
    this.#tentativa = tentativa;
  }

  get listaLetra() {
    return this.#listaLetra;
  }

  get posicao() {
    return this.#posicao;
  }

  // 6 letras - acerto = 2 = 6 - 2 = 4
  contarLetrasRestantes(acerto) {
    return tamanho - acerto;
  }

  marcarLetrasEscolhidas(letra) {
    if (!this.#listaLetra.includes(letra)) {
      this.#listaLetra.push(letra);
    }
  }

  checarletraPalavra(letra) {
    letra.toLowerCase();
    let array = [...this.#palavra];
    if (this.#palavra.includes(letra)) {
      for (let i = 0; i < array.length; i++) {
        if (letra === array[i]) {
          this.#posicao[i] = letra;
        }
      }

      // Interface.imprimirLetra();
      this.marcarLetrasEscolhidas(letra);
      return;
    } else {
      this.#listaLetra.push(letra);
      const foto = document.getElementById("boneco");
      const numeroErro = this.#listaLetra.length;
      foto.src = `./assets/${numeroErro}.png`;
    }
    if (this.#listaLetra.includes(letra)) return;
    this.marcarLetrasEscolhidas(letra);
  }
  //let contador = 1;
  // trocar.addEventListener("click", () => {
  //   img.src = `./assets/${contador}.png`;
  //   contador++;

  resetar() {
    this.#posicao = [];
    this.#listaLetra = [];
  }
}

// Gerar um índice aleatório
// const indiceAleatorio = Math.floor(Math.random() * palavras.length);

// // Acessar o item aleatório da lista
// const palavraAleatoria = palavras[indiceAleatorio];
// const partida = new Partida(palavraAleatoria.palavra, palavraAleatoria.dica);

// partida.checarletraPalavra("a");
// partida.checarletraPalavra("a");
// partida.checarletraPalavra("c");
// partida.checarletraPalavra("s");

// console.log(palavraAleatoria.palavra);
// console.log(partida.listaLetra);
// console.log(partida.tamanho);
// console.log(partida.posicao);
// const result = [];
// for (let i = 0; i < partida.posicao.length; i++) {
//   const element = partida.posicao[i];
//   result.push(element ? element : "_");
// }
// console.log("result: ", result);
