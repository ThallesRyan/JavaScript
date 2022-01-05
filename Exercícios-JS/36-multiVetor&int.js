/*Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
o valor do elemento for maior que 5.
 */
function multi(vetorNumeros, inteiro){
    let vetorResultado = []

    for(let i = 0; i < vetorNumeros.length; i++){
        vetorResultado.push(vetorNumeros[i] * inteiro)
    }
    return vetorResultado
}

function multi2 (vetorNumeros, inteiro){
    let vetorResultado = []

    for(let i = 0; i < vetorNumeros.length; i++){
        if(vetorNumeros[i] > 5){
            vetorResultado.push(vetorNumeros[i] * inteiro)
        }
    }
    return vetorResultado
}

let vetor1 = [1,2,3,4,5,6]
console.log(multi(vetor1, 2))

console.log(multi2(vetor1,2))

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let vetor = [1, 2, 3, 4, 5]

function multiplicaVetor(vetor, multiplicador){
    let vetorResultado = []
    vetor.forEach(elemento => {
        vetorResultado.push(elemento * multiplicador) 
    });

    return vetorResultado
}

console.log(multiplicaVetor(vetor, 3))