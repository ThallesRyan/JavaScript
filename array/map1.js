const nums = [1,2,3,4,5]

//For com "propósito"
//Transforma um array em outro diferente com base em uma funcao
let resultado = nums.map(function(e){//Transforma um array de números em outro array com o dobro de cada número, não muda o array original, retorna um array novo
    return e*2
})

console.log(resultado)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)

console.log(resultado)