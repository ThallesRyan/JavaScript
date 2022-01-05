// Quando atribuimos uma variável a outro, passamos o valor de uma para outra se for valores primitivos
//Se atribuirmos uma varoável a um objeto por exemplo, passamos o endereco de memória do objeto para a variável


const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //Evitar atribuir undefined
console.log(!!produto.preco)
//delete produto.preco
console.log(produto)

produto.preco = null // Sem preco
console.log(!!produto.preco)
console.log(produto)