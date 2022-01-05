const cardapio = (codigo, quantidade) => {
    let pedido = {}
    switch (codigo) {
        case 100:
            pedido.codigo = codigo
            pedido.descricao = 'Cachorro_Quente'
            pedido.preco = 3.0
            pedido.total = pedido.preco * quantidade
            break
        case 200:
            pedido.codigo = codigo
            pedido.descricao = 'Hambúrguer_Simples'
            pedido.preco = 4.0
            pedido.total = pedido.preco * quantidade
            break
        case 300:
            pedido.codigo = codigo
            pedido.descricao = 'Cheeseburguer'
            pedido.preco = 5.50
            pedido.total = pedido.preco * quantidade
            break
        case 400:
            pedido.codigo = codigo
            pedido.descricao = 'Bauru'
            pedido.preco = 7.50
            pedido.total = pedido.preco * quantidade
            break
        case 500:
            pedido.codigo = codigo
            pedido.descricao = 'Refrigerante'
            pedido.preco = 3.50
            pedido.total = pedido.preco * quantidade
        case 600:
            pedido.codigo = codigo
            pedido.descricao = 'Suco'
            pedido.preco = 2.80        
            pedido.total = pedido.preco * quantidade
            break

            default: return "Produto não existe"


    }

    return pedido
}


let pedidoCompleto = cardapio(200, 3)
console.log(pedidoCompleto)

pedidoCompleto = cardapio(250, 3)
console.log(pedidoCompleto)

pedidoCompleto = cardapio(300, 3)
console.log(pedidoCompleto)