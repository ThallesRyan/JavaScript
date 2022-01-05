/*Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir todos os números
ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente
para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor. */

const imprimirImpares = (inicio = 0, fim = 100)=>{

    if (fim < inicio) {
        let troc = 0
        troc = inicio
        inicio = fim
        fim = troc
    }

    for (let i = inicio; i <= fim; i++) {
        if (i % 2 !== 0) {
            console.log(i)
        }
    }
    console.log(" ")
}

imprimirImpares()
imprimirImpares(5,1)
imprimirImpares(50)
imprimirImpares(110)