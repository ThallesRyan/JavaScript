const numeroPorExtenso = numero =>{
    switch(numero){
        case 1:return 'Um'
        case 2:return 'Dois'
        case 3:return 'Três'    
        case 4:return 'Quadro'
        case 5:return 'Cinco'  
        case 6: return 'Seis'
        case 7: return 'Sete'
        case 8: return 'Oito'
        case 9: return 'Nove'
        case 10: return 'Dez'
        default: return 'Número fora do intervalo'




    }
}

console.log(numeroPorExtenso(1))
console.log(numeroPorExtenso(3))
console.log(numeroPorExtenso(2))
console.log(numeroPorExtenso(10))
console.log(numeroPorExtenso(13))