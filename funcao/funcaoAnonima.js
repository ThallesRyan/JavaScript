//Atribuir uma funcao anonima a uma variável
const soma = function(x,y){
    return x+y
}

//Se nao for passado uma funcao operacao como parâmetro, ela será a funcao soma como padrão
const imprimirResultado = function (a,b, operacao = soma){
    //Vai chamar a funcao operacao, passando a e b como parâmetro e exibir o retorno
    console.log(operacao(a,b))
}
//Será 3+4, a operacao será a soma, pois n foi passado nenhuma outra funcao de operacao
imprimirResultado(3, 4)

imprimirResultado(3, 4, soma)

//foi passado dois números como parâmetros e a funcao anônima que será a operacao entre os numeros
imprimirResultado(3,4, function(x,y){
    return x - y
})

//Passado dois números como parâmetro  e a arrow function para multiplicacao
imprimirResultado(3, 4, (x, y) => x * y)

//atribuir uma funcao anonima a um atributo de um objeto
const pessoa = {
    falar: function(){
        console.log('Opa')
    }
}

//Para chamar a funcao que foi atribuída a um atributo de um objeto
pessoa.falar()

