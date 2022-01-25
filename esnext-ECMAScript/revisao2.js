// Arrow Function
const soma = (a,b) => a + b
console.log(soma(2,3))

// Arrow Function(this)
// no arrow function, a referência de this não muda, ainda aponta para o exports, mesmo usando o bind
const lexico1 = () => console.log(this === exports) 
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

// parametro default
// Parametro assume um valor quando não for passado
function log(texto = 'Node'){
    console.log(texto)
}
log()
log('Sou mais forte')

//Operador rest
// usado para receber muitos parâmetros em quantidade indefinida
function total(... numeros){
    let total = 0
    numeros.forEach(n => total += n) // for each executa uma funcao para cada elemento do array
    return total
}

console.log(total(2,3,4,5))