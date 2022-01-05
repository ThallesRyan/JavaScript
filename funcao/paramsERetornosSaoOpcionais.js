function area(largura, altura) {
    const area = largura * altura
    if (area > 20) {
        console.log(`Valor acima do permitido: ${area}m2.`)
    } else {
        return area
    }
}

console.log(area(2, 2))
//Não dá erro, mas retorna Not a Number
console.log(area(2))
//Não dá erro, mas retorna Not a Number
console.log(area())
//Só conta até o segundo parâmetro
console.log(area(2, 3, 17, 22, 44))

//Mostra a mensagem do if e retorna undefined(Quando não há retorno na funcao)
console.log(area(5, 5))