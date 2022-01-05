function diaUltil(dia){
    //Não precisou de usar break pois o valor está sendo retornado imediatamente 
    switch(dia){
        case 1: case 7:
        return "Fim de semana" 
            
    
        case 2: case 3: case 4: case 5: case 6:
        return "Dia útil"

        default:
           return "Dia inválido"
     }
}

console.log(diaUltil(2))
console.log(diaUltil(1))
console.log(diaUltil(7))
console.log(diaUltil(12))
console.log(diaUltil(5))