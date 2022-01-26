// com promise...
const http = require('http')

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    //Promise usado para assincronia
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''
            //res.on('data', function) // usado para executar uma funcao quando parte dos dados estiverem sido baixados
            res.on('data', dados => {
                resultado += dados
            })
            //res.on('end', function) // usado para executar uma funcao quando todos os dados estiverem sido baixados
            res.on('end', () => {
                try{
                    resolve(JSON.parse(resultado))
                }catch(e){
                    reject(e)
                }
            })
        })
    })
}
// para usar várias promises de uma vez
Promise.all([getTurma('A'),getTurma('B'),getTurma('C')])
    //Then executa o código após a conclusao da requisição
    .then(turmas => [].concat(...turmas))// concatena cada array bidmensional de alunos em um só //spread
    .then(alunos => alunos.map(aluno => aluno.nome))// cada retorna de uma funcao vai sendo passado como paramentro para o próximo then
    .then(nomes => console.log(nomes))
    .catch(e => console.log(e.message))

getTurma('D').catch(e => console.log(e.message))