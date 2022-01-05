const fabricantes = ["Mercedes","Audi", "BMW"]

function imprimir(nome, indice){
    console.log(`${indice + 1}.${nome}`)
}

function exibir(nome){
    console.log(nome)
}

/*É passado uma funcao como parâmetro
Para cada elemento do vetor, será chamado a funcao imprimir,
passando os parâmetros: valor e índice das respectivas posições, 
além de um terceiro parâmetro, que é o vetor inteiro*/
fabricantes.forEach(imprimir)

fabricantes.forEach(exibir)

//Foi passado uma arrow function como parâmetro
//Arrow function recebe o parâmetro fabricante e mostra na tela
fabricantes.forEach(fabricante => console.log(fabricante))


