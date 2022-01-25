//For of executa 1 vez para cada caractere da String
for (let letra of "Cod3r") {
    console.log(letra)
}
console.log()
const assuntosEcma = ['Map', 'Set', 'Promise']

//imprime o índice, ao contrário do for of, que imprime o elemento
for (let i in assuntosEcma) {
    console.log(i)
}
console.log()

//Executa para cada elemnto do vetor.Imprime o elemento
for (let assunto of assuntosEcma) {
    console.log(assunto)
}

const assuntosMap = new Map([
    ['Map', { abordado: true }],
    ['Set', { abordado: true }],
    ['Promise', { abordado: false }]
])

//executa para cada par chave/valor
for (let assunto of assuntosMap) {
    console.log(assunto)
}
console.log()

//Exibe as chaves do map assuntosMap
for (let chave of assuntosMap.keys()) {
    console.log(chave)
}
console.log()

//Exibe os valores do map assuntosMap
for (let valor of assuntosMap.values()) {
    console.log(valor)
}
console.log()

//exibe chaves e valor do Map assuntosMap. Está usando destructuring
for (let [ch, vl] of assuntosMap.entries()) {
    console.log(ch, vl)
}
console.log()

//Cria um set a partir do array no param
const s = new Set(['a', 'b', 'c'])
// exibe cada elemento do set
for (let letra of s) {
    console.log(letra)
}