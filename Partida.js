import { palavras } from "./palavras.js";

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
    this.#posicao = new Array(this.#tamanho);
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
    if (this.#listaLetra.includes(letra)) return;

    if (this.#palavra.includes(letra)) {
      for (let i = 0; i < array.length; i++) {
        if (letra === array[i]) {
          this.#posicao[i] = letra;
        }
      }

      this.marcarLetras();
      this.marcarLetrasEscolhidas(letra);
      return;
    }
    this.marcarLetrasEscolhidas(letra);
  }

  marcarLetras() {
    console.log("deu bom meu chapa");
  }

  resetar() {
    this.#posicao = [];
    this.#listaLetra = [];
  }
}
