/*Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o
primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente.
Faça a troca sem utilizar uma variável auxiliar.
 */

function trocarArrays(vetorA, vetorB) {
    if (vetorA.length === vetorB.length) {
        for(let i = 0; i < vetorB.length; i++){
            vetorA[i] = vetorA[i] + vetorB[i]
            vetorB[i] = vetorA[i] - vetorB[i]
            vetorA[i] = vetorA[i] - vetorB[i]

        }
    }else return console.log("Os vetores são de tamanhos diferentes")

    console.log('VetorA = ' + vetorA)
    console.log('VetorB = ' + vetorB)
}

let array1 = [1, 2, 3, 4, 5]
let array2 = [6, 7, 8, 9, 10]

trocarArrays(array1, array2)
