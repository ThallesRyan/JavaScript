/*Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console.
 */
const contarNegativos = vetor =>{
    let negativos = 0
    for(let i in vetor){
        if(vetor[i] < 0){
            negativos++
        }
    }

    return `O total de números negativos no vetor é ${negativos}.`
}

const vetor1 = [1,2,3,4,5,6,7,8,9,10]
console.log(contarNegativos(vetor1))
const vetor2 = [-1,-2,-3,-4,-5,-6,-7]
console.log(contarNegativos(vetor2))
const vetor3 = [12,7,-3,5,-1,1234,-1234]
console.log(contarNegativos(vetor3))