const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// Sem callback

const notasBaixas1 = []
for(let i in notas){
    if(notas[i] < 7){
        notasBaixas1.push(notas[i])
    }
}

console.log(notasBaixas1)

//Com callback
//Filter retorna verdadeiro ou falso para um condicao
// filter é chamado para cada elemento do vetor
const notasBaixas2 = notas.filter(function (nota){
    return nota < 7
})

console.log(notasBaixas2)

const notasMenorQue7 = nota => nota < 7
/*filter passa por todos elementos do vetor e a cada elemento, 
chama a funcao notasMenorQue7, passando o valor com parâmetro e 
retornando verdadeiro ou falso */
const notasBaixas3 = notas.filter(notasMenorQue7)

console.log(notasBaixas3)
