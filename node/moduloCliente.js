//Para fazer a importação de um módulo que est
const moduloA = require('./moduloA') //caminho relativo
const moduloB = require('./moduloB')

//Quando se importa o módulo, pode-se usar todos os códigos dele
console.log(moduloA.ola)
console.log(moduloA.bemVindo)
console.log(moduloA.ateLogo)
console.log(moduloA)

console.log(moduloB.bomDia)
console.log(moduloB.boaNoite())
console.log(moduloB)
