const estaEntre = (minimo,maximo,numero,inclusivo = false) =>{
    if(inclusivo)return numero >= minimo && numero <= maximo

    return numero > minimo && numero < maximo
}

console.log(estaEntre(10, 100, 50))
console.log(estaEntre(16, 100, 160))
console.log(estaEntre(20,50,20))
console.log(estaEntre(20,50,20, true))