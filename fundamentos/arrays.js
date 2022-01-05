const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])//Ao tentar mostrar uma pos inexistente, mostra-se undefined

valores[4]= 10
console.log(valores)
console.log(valores.length)//Tamanho do vetor

valores.push({id: 3}, false, null, 'teste')
console.log(valores)

console.log(valores.pop())//Retira o valor da ultima pos do vetor
delete valores[0]//Deleta o valor contido na pos indicada
console.log(valores)

console.log(typeof valores)


















