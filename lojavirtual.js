"use strict";
class ProdutoLoja {
    constructor(nomeProduto, precoDoProduto) {
        this.nome = nomeProduto;
        this.preco = precoDoProduto;
    }
}
class CarrinhoCompra {
    constructor() {
        this.produtosDoCarrinho = [];
    }
    adicionar(produto) {
        this.produtosDoCarrinho.push(produto);
    }
    excluirProduto(nomeProduto) {
        this.produtosDoCarrinho = this.produtosDoCarrinho.filter((item) => item.nome !== nomeProduto);
    }
    calcularValorTotal() {
        let soma = 0;
        for (let i = 0; i < this.produtosDoCarrinho.length; i++) {
            soma = soma + this.produtosDoCarrinho[i].preco;
        }
        return soma.toFixed(2);
    }
    exibirProdutos() {
        console.log("Produtos do Carrinho:");
        for (let i = 0; i < this.produtosDoCarrinho.length; i++) {
            console.log("Produto: " + this.produtosDoCarrinho[i].nome
                + "R$ " + this.produtosDoCarrinho[i].preco.toFixed(2));
        }
    }
}
class Loja {
    constructor() {
        this.produtosDoEstoque = [];
        this.carrinhoDeCompra = new CarrinhoCompra();
    }
    adicionarProdutoAoEstoque(produto) {
        this.produtosDoEstoque.push(produto);
    }
    removerProdutoDoEstoque(nomeDoProduto) {
        this.produtosDoEstoque = this.produtosDoEstoque.filter(item => item.nome !== nomeDoProduto);
    }
    adicionarProdutoAoCarrinho(produto) {
        const produtoEncontrado = this.produtosDoEstoque.find(item => item.nome == produto.nome);
        if (produtoEncontrado) {
            this.carrinhoDeCompra.adicionar(produtoEncontrado);
            return "produto adicionado ao carrinho de compra";
        }
        else {
            return "Produto não encontrado ao estoque da loja";
        }
    }
    removerProdutoDoCarrinho(produto) {
        this.carrinhoDeCompra.excluirProduto(produto.nome);
    }
    exibirProdutosDoCarrinho() {
        this.carrinhoDeCompra.exibirProdutos();
    }
}
const ProdutoLoja1 = new ProdutoLoja("Camiseta", 29.90);
const ProdutoLoja2 = new ProdutoLoja("Calça", 49.90);
const ProdutoLoja3 = new ProdutoLoja("Sapato", 79.90);
const ProdutoLoja4 = new ProdutoLoja("Meia", 20.00);
//criando loja
const minhaLoja = new Loja;
//adicionando produto ao estoque
minhaLoja.adicionarProdutoAoEstoque(ProdutoLoja1);
minhaLoja.adicionarProdutoAoEstoque(ProdutoLoja2);
minhaLoja.adicionarProdutoAoEstoque(ProdutoLoja3);
minhaLoja.adicionarProdutoAoEstoque(ProdutoLoja4);
//adicionando rpoduto ao carrinho de compras
minhaLoja.adicionarProdutoAoCarrinho(ProdutoLoja1);
minhaLoja.adicionarProdutoAoCarrinho(ProdutoLoja2);
minhaLoja.adicionarProdutoAoCarrinho(ProdutoLoja3);
minhaLoja.adicionarProdutoAoCarrinho(ProdutoLoja4);
//remover produto do carrinho de compra
minhaLoja.removerProdutoDoCarrinho(ProdutoLoja4);
//remover produto do estoque da Loja
minhaLoja.removerProdutoDoEstoque(ProdutoLoja4.nome);
//exibindo produtos do carrinho de compra
minhaLoja.exibirProdutosDoCarrinho();
//exibindo valor total do carrinho
console.log("Total de carrinho de compras: R$"
    + minhaLoja.carrinhoDeCompra.calcularValorTotal());
