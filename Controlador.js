import { Partida } from "./Partida.js";

export class Controlador {
  static #listaPalavras = [
    { id: 1, palavra: "BANANA", dica: "Uma fruta" },
    { id: 2, palavra: "CACHORRO", dica: "Um animal" },
    { id: 3, palavra: "GUITARRA", dica: "Instrumento musical" },
    { id: 4, palavra: "MONTANHA", dica: "Onde o Sol se põe" },
    { id: 5, palavra: "ABACAXI", dica: "Uma fruta" },
    { id: 6, palavra: "PIZZARIA", dica: "Um estabelecemento comercial" },
    { id: 7, palavra: "ELEFANTE", dica: "Um animal" },
    { id: 8, palavra: "ABÓBORA", dica: "Uma planta cultivada no outono" },
    { id: 9, palavra: "VIOLINO", dica: "Um instrumento musical" },
    { id: 10, palavra: "PRAIA", dica: "Um lugar onde você pode relaxar" },
    { id: 11, palavra: "FLORESTA", dica: "Um lugar cheio de árvores e vida selvagem" },
    { id: 12, palavra: "BICICLETA", dica: "Um meio de transporte" },
    { id: 13, palavra: "TELEFONE", dica: "Um objeto" },
    { id: 14, palavra: "ARROZ", dica: "Um alimento" },
    { id: 15, palavra: "OCULOS", dica: "Um objeto" },
    { id: 16, palavra: "AMIGO", dica: "Alguém próximo" },
    { id: 17, palavra: "COMPUTADOR", dica: "Um objeto" },
    { id: 18, palavra: "FUTEBOL", dica: "Um esporte" },
    { id: 19, palavra: "MUSICA", dica: "Sons organizados." },
    { id: 20, palavra: "DENTISTA", dica: "Uma profissão" },
    { id: 21, palavra: "PASTA", dica: "Um objeto" },
    { id: 22, palavra: "AVIAO", dica: "Meio de transporte" },
    { id: 23, palavra: "CHOCOLATE", dica: "Um doce" },
    { id: 24, palavra: "JARDIM", dica: "Um espaço com plantas" },
    { id: 25, palavra: "CADEIRA", dica: "Um objeto" },
    { id: 26, palavra: "LIVRO", dica: "Um objeto" },
    { id: 27, palavra: "CARRO", dica: "Meio de transporte" },
    { id: 28, palavra: "ESCOLA", dica: "Um local" },
    { id: 29, palavra: "SOL", dica: "Fonte de luz" },
    { id: 30, palavra: "CAMINHO", dica: "Uma rota a ser seguida." },
    { id: 31, palavra: "PAPEL", dica: "Um objeto" },
    { id: 32, palavra: "PIPOCA", dica: "Uma comida" },
    { id: 33, palavra: "CASA", dica: "Um lugar" },
    { id: 34, palavra: "PINTURA", dica: "Uma forma de arte" },
    { id: 35, palavra: "PRAÇA", dica: "Um lugar" },
    { id: 36, palavra: "FILME", dica: "Tem no shopping" },
    { id: 37, palavra: "FLOR", dica: "Uma planta" },
    { id: 38, palavra: "DINHEIRO", dica: "Um objeto" },
    { id: 39, palavra: "TIGRE", dica: "Um animal" },
    { id: 40, palavra: "RELOGIO", dica: "Um objeto" },
    { id: 41, palavra: "MOTO", dica: "Meio de transporte" },
    { id: 42, palavra: "CEU", dica: "O espaço acima da Terra. " },
    { id: 43, palavra: "NADAR", dica: "Um esporte" },
    { id: 44, palavra: "HOSPITAL", dica: "Um local" },
    { id: 45, palavra: "JANELA", dica: "Tem em todas as construções" },
    { id: 46, palavra: "CACHOEIRA", dica: "Água caindo" },
    { id: 47, palavra: "ANIVERSARIO", dica: "Uma data" },
    { id: 48, palavra: "INVERNO", dica: "Uma estação do ano." },
    { id: 49, palavra: "MELANCIA", dica: "Uma fruta" },
    { id: 50, palavra: "MACACO", dica: "Um animal" },
  ];
  static #partida;
  static #palavra;
  constructor() { }

  static inicializarPartida() {
    const dadosPalavra = this.#sortearPalavra();
    this.#partida = new Partida(dadosPalavra.palavra, dadosPalavra.dica);
    this.#partida.init()
    this.#configurarTeclado();

    this.#palavra = dadosPalavra.palavra;
    console.log(dadosPalavra.palavra);
  }

  static #sortearPalavra() {
    const indiceAleatorio = Math.floor(Math.random() * this.#listaPalavras.length);
    const dadosPalavra = this.#listaPalavras[indiceAleatorio];
    return dadosPalavra;
  }

  static #configurarTeclado() {
    // removo eventos anteriores
    document.querySelectorAll(".key").forEach((tecla) => {
      const clone = tecla.cloneNode(true);
      tecla.parentNode.replaceChild(clone, tecla);
    });
    
    // adiciona eventos novos
    document.querySelectorAll(".key").forEach((tecla) => {
      tecla.addEventListener("click", () => {
        this.#partida.checarLetraPalavra(tecla.value, '** ' + this.#palavra);
        // this.#partida.chamar();
      });
    });
  }

}