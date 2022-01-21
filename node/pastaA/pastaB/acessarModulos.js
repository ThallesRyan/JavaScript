const moduloA = require('../../moduloA') // ../ para voltar uma pasta
console.log(moduloA.ola)

const saudacao = require('saudacao') // quando faz a importação, o arquivo index é importado automaticamente
console.log(saudacao.ola)

const c = require('./pastaC')
console.log(c.ola2)

const http = require('http')
http.createServer((req, res) => {
    res.write('Bom dia!')
    res.end()
}).listen(8080)