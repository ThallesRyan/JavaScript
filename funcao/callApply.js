function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`

}
const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    //Referência para a funcao, mas sem a chamar ainda
    getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco())
console.log(produto.getPreco())

const carro = {preco: 49990, desc: 0.20}

//está "ligando" a funcao ao objeto
console.log(getPreco.call(carro))
//está "ligando" a funcao ao objeto
console.log(getPreco.apply(carro))

//Liga a funcao getPreco ao objeto carro e passa parâmetros para getPreco
console.log(getPreco.call(carro, 0.17, '$'))
console.log(getPreco.apply(global, [0.17, '$']))
