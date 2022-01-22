const fs = require('fs') // importação do fs(file system)

//Objeto que será escrito no arquivo json no formato json
const produto = {
    nome: 'Celular',
    preco: 1249.99,
    desconto: 0.15
}
/*caminho do diretório atual + nome do arquivo que será gerado,
Json.stringify converte o objeto para JSON, e uma funcao que pode receber um erro, se receber irá exibi-lo, caso contrário, irá exibir 'Arquivo salvo!'*/
fs.writeFile(__dirname + '/arquivoGerado.json',JSON.stringify(produto),(err) =>{
    console.log(err || 'Arquivo salvo!')
})