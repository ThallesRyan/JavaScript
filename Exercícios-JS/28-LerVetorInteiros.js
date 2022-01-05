/*Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.
*/

function parEImpar (vetor){
    let pares = 0, impares = 0
    /*for(let i in vetor){
        if(vetor[i]%2 === 0){
            pares++
        }else impares++
    }*/

    for(let i= 0; i < vetor.length ; i++){
        if(vetor[i]%2 == 0){
            pares++
        }else {impares++}
    }

    return numeros = {TotalPares:pares, TotalImpares: impares}
}

let vetor = [2,3,4,5,6,7]
console.log(parEImpar(vetor))