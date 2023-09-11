export class Interface {

  constructor() { }

  static imprimir(tamanho, posicao) {
    let lacunas = [];
    const div = document.getElementById("espaco");
    div.innerHTML = "";
    for (let i = 0; i < tamanho; i++) {
      const span = document.createElement("span");
      span.classList.add("lacuna");
      div.appendChild(span);
    }

    lacunas = document.querySelectorAll(".lacuna")
    lacunas.forEach((span, i) => {
      span.innerText = posicao[i];
    });
  }
}


