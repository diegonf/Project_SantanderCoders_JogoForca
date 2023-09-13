import { Controlador } from "./Controlador.js";
import { Interface } from "./Interface.js";

export class Partida {
  #palavra;
  #dica;
  #tamanho;
  #tentativasPermitidas;
  #listaLetrasCorretas;
  #numeroErros;

  constructor(palavra, dica, tentativasPermitidas) {
    this.#palavra = palavra.toLowerCase();
    this.#dica = dica;
    this.#tentativasPermitidas = tentativasPermitidas;

    this.#tamanho = this.#palavra.length;
    this.#listaLetrasCorretas = new Array(this.#tamanho).fill("_");
    this.#numeroErros = 0;
  }

  init() {
    Interface.imprimir(this.#tamanho, this.#listaLetrasCorretas, true);
  }

  checarLetraPalavra(letra, tecla) {
    letra.toLowerCase();
    const letraCerta = this.#palavra.includes(letra);
    if (letraCerta) {
      this.#atualizarTeclado(tecla, "correta");
      this.#atualizarLetrasCorretas(letra);
      this.#checarResultadoFinal();
    } else {
      this.#atualizarTeclado(tecla, "errada");
      this.#atualizarIndiceBoneco(++this.#numeroErros);
      this.#checarResultadoFinal();
    }
  }

  #atualizarLetrasCorretas(letra) {
    let letrasPalavra = [...this.#palavra];
    for (let i = 0; i < letrasPalavra.length; i++) {
      if (letra === letrasPalavra[i]) {
        this.#listaLetrasCorretas[i] = letra;
      }
    }

    Interface.imprimir(this.#tamanho, this.#listaLetrasCorretas);
  }

  #atualizarIndiceBoneco(indice) {
    const foto = document.getElementById("boneco");
    foto.src = `./assets/${indice}.png`;
  }

  #atualizarTeclado(tecla, classe) {
    tecla.classList.add(classe);
    tecla.disabled = true;
  }

  #checarResultadoFinal() {
    let resultado = "";
    resultado = !this.#listaLetrasCorretas.includes("_")
      ? "vitoria"
      : this.#numeroErros >= this.#tentativasPermitidas
      ? "derrota"
      : "";

    if (resultado === "vitoria") {
      setTimeout(() => {
        alert("Você ganhou! Meu chapa!!");
        this.resetarPartida();
      }, 500);
    } else if (resultado === "derrota") {
      setTimeout(() => {
        alert("Você perdeu! Tente mais uma vez :)");
        this.resetarPartida();
      }, 500);
    }
  }

  resetarPartida() {
    this.#atualizarIndiceBoneco(0);
    Controlador.inicializarPartida();
  }

  get dica() {
    return this.#dica;
  }
}
