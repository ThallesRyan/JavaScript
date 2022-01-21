const compraDeCarros = carro => {
    carro = carro.toLowerCase()
    switch(carro){
        case 'hatch': return "Compra efetuada com sucesso"
        case 'sedans': case 'motocicletas': case 'caminhontes':return "Tem certeza que não prefere esse modelo?"
        default: return "Não trabalhamos com este tipo de automóvel aqui"
    }
}

console.log(compraDeCarros('motocicletas'))
console.log(compraDeCarros('HATCH'))
console.log(compraDeCarros('hatch'))
console.log(compraDeCarros("sedans"))
