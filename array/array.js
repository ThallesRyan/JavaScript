console.log(typeof Array, '/', typeof new Array, typeof [] )

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])


aprovados[3] = 'Paulo' //Definir um valor a um indice de um array
aprovados.push('Abia') //Coloca um valor após o último indice usado de um vetor
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort()// ordena o array
console.log(aprovados)

delete aprovados[1]// deleta algum elemento do array, o elemento vira undefined
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1,0,'Boston')//apartir de um índice, pode excluir alguns valores e/ou adicionar novos valores
console.log(aprovados)
aprovados.splice(0,1)
console.log(aprovados)









