// Closure é o escopo criado quando uma função é declarada
// Esse escopo permite a função acessar e manipular variáveis externas à função

// Contexto léxico

const x = 'Global'

function fora(){
    const x = 'Local'

    function dentro(){
        return x
    }

    return dentro    
}

//fora retorna uma funcao, que será armazenada na variavel minhaFuncao 
const minhaFuncao = fora()

//chama a funcao retornada e exibe o seu valor
console.log(minhaFuncao())

