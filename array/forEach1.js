const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice){//forEach sempre 3 parâmetros, podendo ser usados ou não. 1° Param: valor,2°: Índice do valor, 3°: O vetor inteiro
    console.log(`${indice + 1}) ${nome}`)

})

aprovados.forEach(nome => console.log(nome)) // usando arrow function
console.log()

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)// para cada elemento do array, a funcao exibirAprovados será chamada