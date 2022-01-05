const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
//Não é muito usado em arrays, tem opções melhores para percorre-lo
for(let i in notas){
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Thalles',
    sobrenome: 'Ryan',
    idade: 19, 
    peso: 85
}

//Percorre o objeto inteiro, boa opcao para percorrer os atributos do objeto 
for( let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
    
}