
const sequence = {
    _id: 1, // _ é usado para valores privados
    get id() {return this._id++} // sempre que for chamado, será adiciona 1 no id e será retornado para a chamada
}

const produtos = {}

function salvarProduto(produto){
    if(!produto.id)produto.id = sequence.id // se não tiver setado, fará produto.id = sequence.id 
    produtos[produto.id] = produto // setando a propriedade  do objeto com [], colocando o id do produto sendo uma chave, e o produto sendo valor
    return produto //Retornado com id, se antes já não tivesse
}
//Para pegar um produto por seu id, e retornar
function getProduto(id){
    return produtos[id] || {} // Se o objeto não existir, retorna Vazio
}

//Para pegar todos os produtos e retornar
function getProdutos(){
    return Object.values(produtos)// retorna somentes os valores do objeto produtos
}

function excluirProduto(id){
    const produto = produtos[id]
    delete produtos[id]
    return produto
}
//Para tornar as funções visíveis fora desse arquivo
module.exports = {salvarProduto, getProduto, getProdutos, excluirProduto}