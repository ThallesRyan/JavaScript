Array.prototype.map2 = function(callback){
    const newArray = []
    for(let i = 0; i < this.length; i++){// This neste contexto referencia o arrayem que o método é aplicado, ex meuArray.map2()...
        newArray.push(callback(this[i], i , this))
    }
}



const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

// Retornar um array apenas com os preços

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map2(paraObjeto).map2(apenasPreco)
console.log(resultado)