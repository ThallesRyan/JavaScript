function imprimirSoma(a,b){
    console.log(a + b)
}

imprimirSoma(2,3)
imprimirSoma(2)
imprimirSoma(2,10,4,5,6,7,8)
imprimirSoma()
console.log(" ")

//Funcso com retorno
function soma(a, b = 1){//Se n for passado o segundo parâmetro, ele será 1 por padrao
    return a+b
}

console.log(soma(2,3))
console.log(soma(2))
console.log(soma())