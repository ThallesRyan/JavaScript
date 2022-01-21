const numeros = [1,2,3,4,5]

const somatorio =  numeros.reduce((acumulador, atual)=> {
    console.log(acumulador, atual)// o acumulador quando não é passado param, é definido como sendo o primeiro elemento do vetor(índice 0)
    return acumulador + atual
})//o primeiro parâmetro é a funcao, o segundo parâmetro é o valor inicial do contador
console.log()
console.log(somatorio)

const palavras = ["Hello", "World", "From", "Reduce!"]

const frase = palavras.reduce((fraseCompleta, palavra)=>{

    return fraseCompleta + " " + palavra
}) 

console.log(frase)
