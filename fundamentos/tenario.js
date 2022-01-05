// funcao associada a variavel resultado, somente um parâmetro(nota), e a condicao  nota >= 7, se for verdadeira, retorna aprovado, se for falso, retorna reprovado
const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

console.log(resultado(7.1))
console.log(resultado(6.1))