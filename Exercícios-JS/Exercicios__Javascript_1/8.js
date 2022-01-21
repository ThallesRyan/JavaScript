let ListaString = []

function adicionarPontuacao(pontuacao){
    ListaString.push(pontuacao)
    let quantidadeDeRecordes = 0
    let piorPartida = ListaString[0]
        if(ListaString.length > 1){
            for(let i = 0;i < ListaString.length; i++ ){
                if(ListaString[i] < pontuacao){
                    quantidadeDeRecordes++
                }
                if(ListaString[i] < piorPartida){
                    piorPartida = i + 1
                }
                
            }
        }
        return [quantidadeDeRecordes, piorPartida]
}

console.log(adicionarPontuacao(5))
console.log(adicionarPontuacao(1))
console.log(adicionarPontuacao(2))
console.log(adicionarPontuacao(3))


