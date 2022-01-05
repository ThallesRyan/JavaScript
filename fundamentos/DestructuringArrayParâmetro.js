function rand([min = 0, max = 1000]){
   //Na desestruturação de um Array, as ordens dos elementos importa, pega-se a partir da primeira posião
    if(min > max){
        [min,max] = [max, min]
    }
    //Random gera um valor de 0 a 1
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50,40]))
console.log(rand([992]))
console.log(rand([, 10]))
console.log(rand([]))
//Erro
console.log(rand())