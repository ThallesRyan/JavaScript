
// Como se fosse um array, que não aceita repetição de chaves. A chave pode ser funcao, objeto, numeros...
const tecnologias = new Map()
tecnologias.set('react', {framework: false})
tecnologias.set('angular', {framework: true})

console.log(tecnologias.react)// undefined
console.log(tecnologias.get('react').framework)

const chavesVariadas = new Map([
    [function () { }, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número'],
])

//exibe chave e valor de cada elemento do Map
chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})

console.log(chavesVariadas.has(123))// testa se tem o elemento no map, retorna boolean
chavesVariadas.delete(123)// deleta um elemento do map
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)// mostra o tamanho do array

//map não aceita repetição de chaves
chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b')
chavesVariadas.set(456, 'b')
console.log(chavesVariadas)