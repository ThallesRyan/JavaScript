const mediaVetor = vetor =>{
    let totalVetor = 0, mediaTotalVetor = 0

    for(let i = 0; i < vetor.length; i++){
        totalVetor += vetor[i]
    }

    return `A média aritmética do vetor é ${(totalVetor/ vetor.length).toFixed(2)}`

}
const vetor1 = [10,10,10,10,10]
console.log(mediaVetor(vetor1))