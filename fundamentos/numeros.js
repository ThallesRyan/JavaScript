const peso1 =  1.0
let num = '2.0'
const peso2 = Number(num)//Funcao Number
const peso3 = Number('3.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))//Retorna se o parâmetro é inteiro ou n.(true ou false)
console.log(Number.isInteger(peso2))//Retorna se o parâmetro é inteiro ou n.(true ou false)

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2* peso2
const media = total/(peso1 + peso2)

console.log(media.toFixed(2))//Exibe o valor da variável com casas decimais formatadas

console.log(media.toString(2))//Exibe o numero em binario
console.log(media.toString(8))//Exibe o numero em octal
console.log(media.toString(18))//Exibe para hexadecimal

console.log(typeof media)
console.log(typeof Number)


//Cuidados com numbers
console.log(7/0)//Infinity
console.log("10"/2)//Divide String com number
console.log('3' + 2)//Concatena, String tem preferência
console.log('3' - 2)//Faz a operação
console.log("Show!" * 2)//NaN
console.log(0.1 + 0.7)// 0.7999999999999999, usar Math.round para o inteiro mais proximo


console.log(Math.floor(2.2))//Arredonda para baixo
console.log(Math.ceil(2.2))//Arredonda para cima
console.log(Math.round(2.2))//Arredenda para o number mais proximo

//console.log(10.toString())
console.log((10).toString)

const raio = 5.6
const area = Math.PI * Math.pow(raio, 2)

console.log(area)
console.log(typeof Math)//Objeto