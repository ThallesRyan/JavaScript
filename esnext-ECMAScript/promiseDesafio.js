const fs = require('fs')

const leitura = caminho => {
    return new Promise(resolve =>{
        fs.readFile(caminho, 'utf-8', (erro, conteudo) =>{
            const dados = conteudo
            resolve(dados)
        })
        console.log("depois de ler")
    })
}

leitura(__dirname + '/dados.txt')
.then(dados => console.log(dados))