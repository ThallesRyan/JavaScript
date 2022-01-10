//Criação de uma funcao no prototype de Array
Array.prototype.forEach2 = function(callback){// recebe uma funcao como param
    for(let i = 0; i < this.length; i++){// this referencia o array na qual a funcao forEach2 é aplicada
        callback(this[i], i, this)//Para cada elemento do array, a funcao é executada
    }
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']
aprovados.forEach2(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})