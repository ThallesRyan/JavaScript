/*Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.
 */

const cedulas = valor =>{
    let notas100 = 0, notas50 = 0, notas10 = 0, notas5 = 0, notas1 = 0
    
    while(valor != 0){
        if(valor >= 100){
            let resto = valor % 100
            valor = valor - resto
            notas100 = valor/100
            valor = valor%100 + resto
        }   
        if(valor >= 50 && valor < 100){
            let resto = valor % 50
            valor = valor - resto
            notas50 = valor/50
            valor = valor%50 + resto
        }
        if(valor >= 10 && valor < 50){
            let resto = valor % 10
            valor = valor - resto
            notas10 = valor/10
            valor = valor%10 + resto
        }
        if(valor >= 5 && valor < 10){
            let resto = valor % 5
            valor = valor - resto
            notas5 = valor/5
            valor = valor%5 + resto

        }
        if(valor >= 1 && valor < 5){
            let resto = valor % 1
            valor = valor - resto
            notas1 = valor/1
            valor = valor % 1 + resto
        }
    }
    let resultado = ""
    if(notas100 > 0)resultado += `${notas100} nota(s) de R$ 100.\n`
    if(notas50 > 0)resultado += `${notas50} nota(s) de R$ 50.\n`
    if(notas10 > 0)resultado += `${notas10} nota(s) de R$ 10.\n`
    if(notas5 > 0)resultado += `${notas5} nota(s) de R$ 5.\n`
    if(notas1 > 0)resultado += `${notas1} nota(s) de R$ 1.\n`

    return resultado
    
}

console.log(cedulas(121))