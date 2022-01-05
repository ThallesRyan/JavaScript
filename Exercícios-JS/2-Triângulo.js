let ladoa = 10
let ladob = 15
let ladoc = 20

console.log(triangulo(ladoa, ladob, ladoc))





function triangulo(ladoa, ladob, ladoc){

    if(ladoa == ladob && ladoa == ladoc){
        return "Triângulo equilátero"
    }else if(ladoa == ladob && ladoa != ladoc){
        return "Triângulo Isósceles"
    }
    else if(ladoa != ladob && ladoa != ladoc && ladob != ladoc){
        return "Triângulo escaleno"
    }
}