

export class Interface {

  constructor() { }
  criarPalavra(palavra) { }
  static imprimirLetra(palavra) {

  }
  imprimirTeclado(teclado) { }

  static imprimir(tamanho, posicao, flag = false) {
    let lacunas = [];
    // if (flag) {
    const div = document.getElementById("espaco");
    div.innerHTML = "";
    for (let i = 0; i < tamanho; i++) {
      const span = document.createElement("span");
      span.classList.add("lacuna");
      div.appendChild(span);
    }
    // }

    lacunas = document.querySelectorAll(".lacuna")
    lacunas.forEach((span, i) => {
      // console.log(span);
      // console.log(posicao[i]);
      span.innerText = posicao[i];
    });

    // for (let i = 0; i < lacunas.length; i++) {
    //   console.log(lacunas[i].textContent);
    //     lacunas.innerText = posicao[i];
    // }

    // lacunas.forEach((span, i) => {
    //   console.log(i);
    //   console.log("entrei na de baixo");
    //   console.log(posicao[i]);
    //   // span.innerText = posicao[i];
    // });

  }
  imprimirForca() { }
  mostrarPontuacao(pontuacao) { }
  reiniciarPartida() { }
}

const keyboardElement = document.createElement("input");
keyboardElement.setAttribute("type", "text");
