// estratégia 1 para gerar valor padrão
function soma1(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}
//Causa um pequeno erro quando se passa zero, pois considera zero como falso e assume o segundo valor
console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0))

// estrategia 2, 3 e 4 para gerar valor padrão
function soma2(a, b, c) {
    //se a !== undefined, a = a, se for falso, a = 1
    a = a !== undefined ? a : 1
    //Se na pos 1 do arguments for verdadeiro, b = b, se for falso b = 1
    b = 1 in arguments ? b : 1
    //se c for NaN(Not a Number), c = 1, se não for c = c
    c = isNaN(c) ? 1 : c
    return a + b + c
}