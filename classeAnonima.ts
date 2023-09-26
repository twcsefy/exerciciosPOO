const pessoa = new class{
    private primeiroNome = "Maria";
    private ultimoNome = "José Phonsy";
    getNomeCompleto(){
        return this.primeiroNome + " " + this.ultimoNome;
    }
}

console.log(pessoa.getNomeCompleto());

const treinadorPessoal = new class{
    private rotina: {nome: string; duracao: number}[] = [];

    adicionarExercicios(nome: string, duracao: number): void {
        this.rotina.push({nome, duracao});
    }

    calcularTempoTotal():number{
        // decclarando variavel
        let soma = 0;
        this.rotina.forEach(item => soma += item.duracao);
        //this.rotina.forEach(item => soma = soma + item.duracao);
        return soma;
    }
}

treinadorPessoal.adicionarExercicios("Corrida", 30);
treinadorPessoal.adicionarExercicios("Flexões", 15);
treinadorPessoal.adicionarExercicios("Agachamentos", 20);
console.log("Tempo total necessário para a rotina: " +
treinadorPessoal.calcularTempoTotal()+"em minutos");
