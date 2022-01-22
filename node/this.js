console.log(this === global) // false
console.log(this === module) // false
console.log()
console.log(this === module.exports)// true
console.log(this === exports)// true
console.log()
function logThis(){
    console.log('Dentro de uma funcao...')
    console.log(this === exports)// false
    console.log(this === module.exports)// false
    console.log(this === global)// true

    //this.perigo = '...' //aponta para o global do node (dentro da funcao)
}

//this.perigo = '...'// aponta para o module.exports (no módulo)

logThis()
