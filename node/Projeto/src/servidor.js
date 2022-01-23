const porta = 3034 // Porta serve para identificar qual processo irá interpretar uma determinada requisisão 

const { raw } = require('express')
const express = require('express')
const app = express() //Nova instância
const bodyParser = require('body-parser')
const bancosDeDados = require('./bancoDeDados')

app.use(bodyParser.urlencoded({ extended: true}))// para todas requisições, será disparado //Se o padrão for urlencoded, ele transforma o corpo da requisição em objeto, para podermos acessar com facilidade

 // sempre que se conectar no servidor usando um método GET, e a url for .../produtos, execute a funcao a seguir
app.get('/produtos',(req, res, next) =>{// req contém todos os dados da requisicao feita pelo usuário, res é a variavel que contém um objeto de resposta que será devolvido para o usuário qnd o processamento for concluido
    res.send(bancosDeDados.getProdutos()) // o que será mandado como resposta
})

app.get('/produtos/:id', (req, res, next) =>{//Quando a req for com um id(1,2,3..)
    res.send(bancosDeDados.getProduto(req.params.id))// a reposta será o que for buscado no banco de dados na funcao getProduto, com o param id da requisição feita pelo usuário
})

app.post('/produtos', (req, res, next) =>{
    const produto = bancosDeDados.salvarProduto({
        //valores pegos da requsicao para setar o produto(enviados por formulário por exemplo)
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //envia a resposta no formato JSON
})
//Usado para alterar um registro já existente
app.put('/produtos/:id', (req, res, next) =>{
    const produto = bancosDeDados.salvarProduto({
        //valores pegos da requsicao para setar o produto(enviados por formulário por exemplo)
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //envia a resposta no formato JSON
})

//Usado para deletar um registro
app.delete('/produtos/:id', (req, res, next) =>{
    const produto = bancosDeDados.excluirProduto(req.params.id)
    res.send(produto) //envia a resposta no formato JSON
})


// cria um servidor que "ouve" a porta indicada e executa uma funcao quando ela é alterada
app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}`)
})