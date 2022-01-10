const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'Ipad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plástico', preco: 18.99, fragil: false}
]
//Filter retorna um novo array com os elementos filtrados
//o parâmetro é uma função, que retorna true ou false para determinada condição(filtro)
console.log(produtos.filter(function(p) {
    return false
}))

const isFragile = produto => produto.fragil 
const isExpensive = produto => produto.preco >500 

console.log(produtos.filter(isFragile).filter(isExpensive))












