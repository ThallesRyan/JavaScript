const frutas = ['Banana', 'Maçã', 'Uva', 'Goiaba'] // A variável frutas n pod mais ser atribuida a nada, pois é constante... mas os valores do array podem ser modificados
console.log(frutas)
console.log()

let removidoFinal = frutas.pop() // remove o último elemento do array
console.log(removidoFinal)
console.log(frutas)
console.log()

frutas.push('Melancia')// adiciona após a última posição do array
console.log(frutas)
console.log()

let removidoComeco = frutas.shift()// remove o primeiro elemento do array
console.log(removidoComeco)
console.log(frutas)
console.log()

frutas.unshift('Melão')// adiciona um elemento no começo do vetor
console.log(frutas)
console.log()

// Slice pode adicionar e remover elementos

// Adicionar
frutas.splice(2,0,"Kiwi", "Pera")// após o índice 2, será removido 0 elementos, e adicionado 'Kiwi' e 'Pera'
console.log(frutas)
console.log()

// Remover
frutas.splice(3,1)// Fruta comida :) após a posição 3, 1 elemento será removido
console.log(frutas)

//Slice cria um novo array a partir de um pré existente

const algumasFrutas1 = frutas.slice(2) // cria um novo array a partir do índice 2
console.log(algumasFrutas1)

const algumasFrutas2 = frutas.slice(1,4)// novo array a partir do índice 1 até o índice 4
console.log(algumasFrutas2)

