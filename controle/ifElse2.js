const imprimirResultado = function(notas){
    if(nota >= 7){
        console.log('Aprovado!')
    }else {
        console.log('Reprovado')
    }
}

imprimirResultado(10)
imprimirResultado(4)

imprimirResultado('epa')// Cuidado, cairá no bloco else
//Testar se o valor passado por parâmetro é uma string, ou lançar uma excessão