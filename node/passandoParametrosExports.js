//exportando para fora do módulo uma funcao com parametros, ...nomes pode receber quantos parametros for necessário, transformando-os em um array
module.exports = function(...nomes){
    return nomes.map(nome => `Boa semana ${nome}!`)
}