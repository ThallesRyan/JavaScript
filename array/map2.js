const carrinho = [//cada posicao do array contem um objeto, no formato JSON
    '{"nome": "Borracha", "preco": 3.45}',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

// Retornar um array apenas com os preços

const paraObjeto = json => JSON.parse(json) // Transforma o JSON em objeto
const apenasPreco = produto => produto.preco 

const resultado = carrinho.map(paraObjeto).map(apenasPreco)

console.log(resultado)










