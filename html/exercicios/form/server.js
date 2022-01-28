const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const res = require('express/lib/response')

app.use(bodyParser.urlencoded({extended:true}))

app.post('/users',(req, resp)=>{
    console.log(req.body)
    res.send( '<h1>Parabéns</h1>')
})

app.listen(3034)