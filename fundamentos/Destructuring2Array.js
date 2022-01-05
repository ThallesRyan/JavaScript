//Está pegando o primeiro elemento do array e colocando na variável a
const [n] = [10]
console.log(n)

const valores = [1,2,3,4]

const [a,b,c,d] = valores
console.log(a,b,c,d)

//Pega o primeiro elemento do vetor, ignora o 2, pega o 3, ignora o 4, tenta pegar o 5, mas ele n existe, por isso fica undefined, atribui o n6 a 0
const[n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)

//ignora o primero elemento do vetor, entra no segundo elemento que é um vetor, ignora o primeiro elemento dele, e atribui o segundo elemento a variável nota
const[, [, nota]] = [[, 8, 8], [9, 6, 8]]
console.log(nota)