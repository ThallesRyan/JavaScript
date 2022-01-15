const numeros = [1,2,3,4,5]

const somatorio =  numeros.reduce((acumulador, atual)=> {
    console.log(acumulador, atual)// o acumulador quando não é passado param, é definido como sendo o primeiro elemento do vetor(índice 0)
    return acumulador + atual
})
console.log(somatorio)

