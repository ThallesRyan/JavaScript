Array.prototype.filter2 = function(callback){//recebe a funcao callback que será aplicada no array
    const novoArray = [] // Cria um novo array para os itens filtrados
    //Passa pelos itens do array  em que a funcao foi aplicada e dá um push nos itens que retornarem true da funcao callback
    for(let i = 0; i < this.length; i++){
        if(callback(this[i], i, this)){// a funcao callback passada pode usar esses parâmetros
            novoArray.push(this[i])
        }
    }
    return novoArray
}



const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'Ipad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plástico', preco: 18.99, fragil: false}
]

const isFragile = produto => produto.fragil 
const isExpensive = produto => produto.preco >500 

console.log(produtos.filter2(isFragile).filter2(isExpensive))

