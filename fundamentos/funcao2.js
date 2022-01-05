//Armazanamento de uma funcao na variável

const imprimirSoma = function(a , b){
    console.log(a + b)
}

imprimirSoma(2,3)

//Armazenando uma funcao arrow em uma variavel
const soma = (a,b) => {
    return a + b
}

console.log(soma(2,3))

//Retorno implícito
const substracao = (a,b) => a - b
console.log(substracao(2,3))

//Quando se recebe apenas um parâmetro
const imprimir2 = a => console.log(a) 

imprimir2('Legal!!!!!')
