const estoqueFrutas = fruta =>{
    fruta = fruta.toLowerCase()
    switch(fruta){
        case 'maçã':
            return 'Não vendemos essa fruta aqui'
        case 'kiwi': 
            return "Estamos com escassez de kiwis"   

        case "melancia":
            return "Aqui está, são três reais o quilo"

        default: return "Erro"

    }
}

console.log(estoqueFrutas("maçã"))