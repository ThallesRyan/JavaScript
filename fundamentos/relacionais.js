console.log('(01)','1' == 1)//Compara somente o valor
console.log('02', '1' === 1)//Compara o valor e o tipo 
console.log('(03)', '3' != 3)// Compara se os valores são diferentes
console.log('(04)','3' != 3)//Compara se o valor e o tipo são diferentes

console.log('(05)', 3 < 2)
console.log('(06)', 3 > 2)
console.log('(07)', 3 <= 2)
console.log('(08)', 3 >= 2)

//Só há comparação e atribuicao de variáveis de tipo primitivo...
//Outros tipos se compara endereço de memória e atribui endereço de memória(referência)
const d1 = new Date(0)//1970-01-01T00:00:00.000Z
const d2 = new Date(0)//1970-01-01T00:00:00.000Z
console.log(d1)
console.log(d2)
console.log(typeof d1)
console.log(typeof d2)

console.log('(09)', d1 === d2)//False
console.log('(10)', d1 == d2)//False
console.log('(11)',d1.getTime() === d2.getTime())//True


console.log('(12)', undefined == null)//True
console.log('(13)', undefined === null)//False
