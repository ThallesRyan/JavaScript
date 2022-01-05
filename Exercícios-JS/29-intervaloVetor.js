/*Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
deles estão fora do intervalo, escrevendo estas informações.
 */

function calcularIntervalo(intervaloVetor){
    let dentroIntervalo = 0, foraDoIntervalo = 0
    for(let i = 0; i < intervaloVetor.length; i++){
        if(intervaloVetor[i] >= 10 && intervaloVetor[i] <= 20){
            dentroIntervalo++
        }else foraDoIntervalo++
    }

    return intervalo = {Dentro:dentroIntervalo, Fora:foraDoIntervalo}
}

let vetor1 = [1,2,3,4,5]
console.log(calcularIntervalo(vetor1))

let vetor2 = [10,11,12,13,14,15,16,17,18,19,20]
console.log(calcularIntervalo(vetor2))