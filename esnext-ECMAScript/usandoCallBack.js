// sem promise...
const { Console } = require('console')
const http = require('http')
//Recebe a letra do url e a funcao que será executada quando a requisicao for concluida
const getTurma = (letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    http.get(url, res => {
        let resultado = ''
        //data sinaliza que parte da requisicao foi baixada
        //Recebe os dados baixados com param e concatena com resultado
        res.on('data', dados => {
            resultado += dados
        })
        //end sinaliza que toda a requisicao foi baixada
        //ao acabar a requisicao, executa a funcao callback passando o resultado em forma de objeto
        res.on('end', () => {
            callback(JSON.parse(resultado))
        })
    })
}

let nomes = []
getTurma('A', alunos => {
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
    getTurma('B', alunos => {
        nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
        getTurma('C', alunos => {
            nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
            console.log(nomes)
        })
    })
    
})




