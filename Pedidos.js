"use strict";
var StatusPedido;
(function (StatusPedido) {
    StatusPedido["AguardandoPreparo"] = "Aguardando Preparo";
    StatusPedido["EmPreparo"] = "Em Preparo";
    StatusPedido["SaiuParaEntrega"] = "Saiu Para Entrega";
    StatusPedido["Entregue"] = "Entregue";
})(StatusPedido || (StatusPedido = {}));
class ProdutoPedido {
    constructor(nome, valor) {
        this.nome = nome;
        this.valor = valor;
    }
}
class Pedido {
    constructor() {
        this.produtos = [];
        this.status = StatusPedido.AguardandoPreparo;
    }
    adicionarProduto(produto) {
        this.produtos.push(produto);
    }
    atualizarStatus(status) {
        this.status = status;
    }
    exibirStatus() {
        return this.status;
    }
    exibirProdutoDoPedido() {
        for (let i = 0; i < this.produtos.length; i++) {
            console.log(this.produtos[i].nome + "no valor" + this.produtos[i].valor);
        }
    }
}
const pedido1 = new ProdutoPedido("Fone", 99.90);
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
