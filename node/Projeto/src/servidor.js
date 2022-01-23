const porta = 3034 // Porta serve para identificar qual processo irá interpretar uma determinada requisisão 

const express = require('express')
const app = express() //Nova instância

/*app.get('/produtos', (req, res, next) =>{
    console.log('Middleware 1...')
    next()
})*/

//Faz com que seja atendido para qualquer requisição na porta
/*app.use((req, res, next) =>{// req contém todos os dados da requisicao feita pelo usuário, res é a variavel que contém um objeto de resposta que será devolvido para o usuário qnd o processamento for concluido
    res.send({ nome: 'Notebook', preco: 123.45 }) // o que será mandado como resposta
})*/

 // sempre que se conectar no servidor usando um método GET, e a url for .../produtos, execute a funcao a seguir
app.get('/produtos',(req, res, next) =>{// req contém todos os dados da requisicao feita pelo usuário, res é a variavel que contém um objeto de resposta que será devolvido para o usuário qnd o processamento for concluido
    res.send({ nome: 'Notebook', preco: 123.45 }) // o que será mandado como resposta
})

// cria um servidor que "ouve" a porta indicada e executa uma funcao quando ela é alterada
app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}`)
})