/*Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.*/

const maiorMenor = vetor =>{
    let menor = 999999999999999999999, maior = 0

    for(let i = 0; i < vetor.length;i++){
        if(vetor[i] < menor)menor = vetor[i]
        if(vetor[i] > maior)maior = vetor[i]
    }

    console.log(menor)
    console.log(maior)

}

const vetor1 = [1,2,3,4,5,-123,6,20,7,8,9,10,11,12]
maiorMenor(vetor1)