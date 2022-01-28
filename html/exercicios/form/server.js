const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended:true}))
//Para postar um novo usuário
app.post('/users',(req, resp)=>{
    console.log(req.body)
    resp.send( '<h1>Parabéns</h1>')
})
//Para alterar um usuário já cadastrado
app.post('/users/:id', (req, resp) => {
    console.log(req.params.id)
    console.log(req.body)
    resp.send('<h1>Parabéns. Usuário Alterado!!!</h1>')
})

app.listen(3034)