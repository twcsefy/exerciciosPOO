"use strict";
class Animal {
    constructor(nome, qtdPatas) {
        this.nome = nome;
        this.qtdPatas = qtdPatas;
    }
    apresentar() {
        console.log("Este é um " + this.nome
            + " com " + this.qtdPatas + "patas");
    }
}
class Dog extends Animal {
    constructor() {
        super("Cachorro", 4);
    }
    fazerBarulho() {
        console.log("O cachorro está latindo");
    }
}
class Cat extends Animal {
    constructor() {
        super("Gato", 4);
    }
    fazerBarulho() {
        console.log("O gato está miando");
    }
}
class Passaro extends Animal {
    constructor() {
        super("Pássaro", 2);
    }
    fazerBarulho() {
        console.log("O pássaro esta cantando");
    }
}
const cachorro = new Dog();
cachorro.apresentar();
cachorro.fazerBarulho();
const gato = new Cat();
cachorro.apresentar();
cachorro.fazerBarulho();
const passaro = new Passaro();
cachorro.apresentar();
cachorro.fazerBarulho();
