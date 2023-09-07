import keyboard from "keyboard";

class Interface {
  criarPalavra(palavra) {}
  imprimirLetra(palavra) {}
  imprimirTeclado(teclado) {}
  imprimirForca() {}
  mostrarPontuacao(pontuacao) {}
  reiniciarPartida() {}
}

const keyboardElement = document.createElement("input");
keyboardElement.setAttribute("type", "text");
