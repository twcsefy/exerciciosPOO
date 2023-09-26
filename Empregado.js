"use strict";
class Empregado {
    constructor(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }
    presentar() {
        console.log("Este é um " + this.nome
            + " com um salário de" + this.salario + "reais");
    }
}
class Gerente extends Empregado {
    constructor() {
        super("Rodrigo", 5000);
    }
    CalcularSalarioMensal() {
        return this.salario + ((this.salario * 10) / 100);
    }
}
class Desenvolvedor extends Empregado {
    constructor() {
        super("Robson", 3000);
    }
    CalcularSalarioMensal() {
        return this.salario;
    }
}
const gerente = new Gerente();
console.log("O salário do " + gerente.nome + "é de " + gerente.CalcularSalarioMensal() + " reais");
const desenvolvedor = new Desenvolvedor();
console.log("O salário do " + desenvolvedor.nome + "é de " + desenvolvedor.CalcularSalarioMensal() + "reais");
