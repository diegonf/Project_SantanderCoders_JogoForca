import { Controlador } from "./Controlador.js";
import { Interface } from "./Interface.js";

export class Partida {
  #palavra;
  #dica;
  #tamanho;
  #pontuacao;
  #tentativa;
  #listaLetraEscolhidas = [];
  #listaLetrasCorretas;
  #numeroErros;
  constructor(palavra, dica) {
    this.#palavra = palavra.toLowerCase();
    this.#tamanho = this.palavra.length;
    this.#listaLetrasCorretas = new Array(this.#tamanho).fill('_');
    this.#dica = dica;
    this.#pontuacao = 0;
    this.#tentativa = 6;
    this.#numeroErros = 0;
  }

  init() {
    Interface.imprimir(this.#tamanho, this.#listaLetrasCorretas, true);
    const dica = document.querySelector('#dica');
    dica.textContent = this.#dica;
  }

  atualizarLetrasCorretas() {
    Interface.imprimir(this.#tamanho, this.#listaLetrasCorretas);
  }

  marcarLetrasEscolhidas(letra) {
    if (!this.#listaLetraEscolhidas.includes(letra)) {
      this.#listaLetraEscolhidas.push(letra);
    }
  }

  checarLetraPalavra(letra, palavra) {
    console.log(palavra)
    letra.toLowerCase();
    let letrasPalavra = [...this.#palavra];
    const letraCerta = this.#palavra.includes(letra);
    if (letraCerta) {
      for (let i = 0; i < letrasPalavra.length; i++) {
        if (letra === letrasPalavra[i]) {
          this.#listaLetrasCorretas[i] = letra;
        }
      }
      this.atualizarLetrasCorretas();
      const vitoria = !this.#listaLetrasCorretas.includes('_');
      if (vitoria)
        setTimeout(() => {
          this.mostrarResultado(vitoria);
        }, 500)
    } else {
      const foto = document.getElementById("boneco");
      const erros = ++this.#numeroErros;
      foto.src = `./assets/${erros}.png`;
      const perdeu = erros >= 6
      if (perdeu) {
        setTimeout(() => {
          this.mostrarResultado(false);
        }, 500)
      }
    }
    // this.marcarLetrasEscolhidas(letra);
  }

  mostrarResultado(vitoria) {
    if (vitoria) {
      alert('Você ganhou! Meu chapa!!')
    } else {
      alert('Você perdeu! Seu lixo!!')
    }
    this.resetar();
  }

  resetar() {
    const foto = document.getElementById("boneco");
    foto.src = `./assets/0.png`;

    Controlador.inicializarPartida();
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
    return this.#listaLetraEscolhidas;
  }

  get posicao() {
    return this.#listaLetrasCorretas;
  }
}
