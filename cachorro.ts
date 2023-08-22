class Cachorro{
    nome: string
    raca: string 
    idade: number

    constructor(nome: string, raca: string, idade: number)
    {
        this.nome = nome;
        this.raca = raca;
        this.idade = idade;
    }

    apresentar(){
    return "Oi, eu sou " +  this.nome + " um " + this.raca+" de " + this.idade + "anos";
    }

    aprensentarPara(humano: string){
        return "Olá " + humano + " eu sou " + this.nome + " um cachorro " + this.raca + " de " + this.idade + " anos";
    }
}
 

let Antonio = new Cachorro("Antonio", "salsicha", 3);
let Catito = new Cachorro("Catito", "Dachshund", 2);
let Cleiton = new Cachorro("Cleiton Rasta", "Caramelo", 69); 

console.log(Antonio.nome);
console.log(Catito.nome);
console.log(Cleiton.nome);
console.log(Antonio.apresentar());
console.log(Catito.apresentar());
console.log(Cleiton.aprensentarPara("Juleão "));
