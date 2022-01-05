function soma(){
    let soma = 0
    //Arguments é o array interno de uma funcao, 
    //que tem todos os parâmetros que foram passados para a funcao
    for(i in arguments){
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3))

console.log(soma(1.1, 2.2, "Teste"))
console.log(soma('a', 'b', 'c'))
