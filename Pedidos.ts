enum StatusPedido{
    AguardandoPreparo = "Aguardando Preparo" ,
    EmPreparo = "Em Preparo",
    SaiuParaEntrega = "Saiu Para Entrega",
    Entregue = "Entregue"
}

class ProdutoPedido{
    nome: string;
    valor: number;

    constructor(nome: string, valor: number){
        this.nome = nome;
        this.valor = valor;
    }
}

class Pedido{
    private produtos:ProdutoPedido[];
    //private produtos={nome:string, valor:number}[];
    private status: StatusPedido;

    constructor(){
        this.produtos=[];
        this.status= StatusPedido.AguardandoPreparo;
    }



adicionarProduto(produto: ProdutoPedido){
    this.produtos.push(produto);
}
atualizarStatus(status: StatusPedido){
    this.status=status;
}
exibirStatus(){
    return this.status;
}

exibirProdutoDoPedido(){
    for(let i = 0; i< this.produtos.length; i++){
        console.log(this.produtos[i].nome + "no valor" + this.produtos[i].valor);
    }
  }
}

const pedido1 = new ProdutoPedido("Fone",99.90);
const pedido2 = new ProdutoPedido("Celular", 3529.00);
const pedido3 = new ProdutoPedido("Capinha", 30.00);

const novoPedido = new Pedido();
console.log("Statuto atual do Pedido: " + novoPedido.exibirStatus());
novoPedido.atualizarStatus(StatusPedido.AguardandoPreparo);
novoPedido.adicionarProduto(pedido1);
novoPedido.adicionarProduto(pedido2);
novoPedido.adicionarProduto(pedido3);
console.log("Statuto atual do pedido: " + novoPedido.exibirStatus());
novoPedido.atualizarStatus(StatusPedido.EmPreparo);
console.log(novoPedido.exibirStatus());
novoPedido.exibirProdutoDoPedido();