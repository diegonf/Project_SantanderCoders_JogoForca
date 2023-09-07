import * as palavrasJSON from './palavras.json';

class Partida{
    #palavra;
    #dica;
    #tamanho;
    #pontuacao;
    #tentativa;
    #listaLetra = [];
    constructor(palavra,dica){
        this.#palavra = palavra;
        this.#dica = dica;
        this.#tamanho = this.palavra.length;
        this.#pontuacao = 0;
        this.#tentativa = 6;
    }
    get palavra(){
        return this.#palavra;
    }

    set palavra(palavra){
        this.#palavra = palavra;
    }

    get dica(){
        return this.#dica;
    }

    set dica(dica){
        this.#dica = dica;
    }

    get tamanho(){
        return this.#tamanho;
    }

    set tamanho(tamanho){
        this.#tamanho = tamanho;
    }

    get pontuacao(){
        return this.#pontuacao;
    }

    set pontuacao(pontuacao){
        this.#pontuacao = pontuacao;
    }

    get tentativa(){
        return this.#tentativa;
    }

    set tentativa(tentativa){
        this.#tentativa = tentativa;
    }

    get listaLetra(){
        return this.#listaLetra;
    }
    // 6 letras - acerto = 2 = 6 - 2 = 4
    contarLetrasRestantes(acerto){
        return tamanho - acerto;
    }

    marcarLetrasEscolhidas(letra){
        letra.toLowerCase()
        if(!this.#listaLetra.includes(letra)){
            this.#listaLetra.push(letra)
        }
    }


}

partida = new Partida("tempo","sei la")

partida.marcarLetrasEscolhidas("a");
partida.marcarLetrasEscolhidas("a");
partida.marcarLetrasEscolhidas("b");
partida.marcarLetrasEscolhidas("c");
partida.marcarLetrasEscolhidas("d");
console.log(partida.listaLetra);
console.log(partida.tamanho);
