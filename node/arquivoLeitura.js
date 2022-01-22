const fs = require('fs') // importação do file system(fs)

const caminho = __dirname + '/arquivo.json' // __dirname indica o caminho do diretório atual
//console.log(__dirname) // c:\Users\thall\Documents\Faculdade\GitHub\JavaScript\node

// síncrono
const conteudo = fs.readFileSync(caminho, "utf-8")
console.log(conteudo)

// assíncrono, carrega os dados e só após carregar tudo, executa a funcao callback
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

//Para ler especificamente json
const config = require('./arquivo.json')
console.log(config.db)

//Leitura de pasta
fs.readdir(__dirname, (err, arquivos) =>{
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
})

