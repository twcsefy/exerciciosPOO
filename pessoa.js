"use strict";
class Pessoa {
    constructor(nome, idade, comidas) {
        this.nome = nome;
        this.idade = idade;
        this.comida = comidas;
    }
    cumprimentar() {
        let msgHabilitacao = " ja posso tirar minha CNH";
        if (this.idade < 18) {
            msgHabilitacao = "Não posso tirar minha CNH";
        }
        return "Ola meu nome é " + this.nome +
            " e tenho " + this.idade + " anos. " +
            msgHabilitacao + ".";
    }
    comidasFavoritas() {
        console.log("Minha(s) comida(s) favorita(s)");
        for (let i = 0; i < this.comida.length; i++) {
            console.log(this.comida[i]);
        }
    }
}
let pessoa1 = new Pessoa("Caleb", 17, ["macarrão ao molho branco", "KFC", "xota"]);
console.log(pessoa1.cumprimentar());
console.log(pessoa1.comidasFavoritas());
