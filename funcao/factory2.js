function criarProduto(nome, preco){
    return {
        //valores dos atributos nome e preco serão passados por parâmetros
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Notebook', 2199.49))
console.log(criarProduto('ipad', 1199.49))