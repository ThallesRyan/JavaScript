let num1 = 1
let num2 = 2

let num3 = 1
let num4 = 2

num1++
console.log(num1)
--num1
console.log(num1)

//Compara ++num1 === num2 e após isso decrementa o valor de num2
console.log(++num1 === num2--)
//Compara num3 === --num4 e depois incrementa num3 e 
console.log(num3++ === --num4)

console.log(num3 === num4)
console.log(num1 === num2)