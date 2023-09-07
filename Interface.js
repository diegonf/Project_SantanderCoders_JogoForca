import keyboard from 'keyboard';

class Interface {
  criarPalavra(palavra) {

  }
  imprimirLetra(palavra) {

  }
  imprimirTeclado(teclado) {

  }
  imprimirForca() {

  }
  mostrarPontuacao(pontuacao) {

  }
  reiniciarPartida() {

  }
}

const keyboardElement = document.createElement('input');
keyboardElement.setAttribute('type', 'text');

// Cria um teclado com apenas as letras
const keyboard = new keyboard({
  keys: [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
  ],
});


const teste = document.querySelector('#teste');

keyboard.attach(teste);