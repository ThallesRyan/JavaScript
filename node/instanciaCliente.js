const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')
//São criadas novas instancias do objeto pela funcao factory
const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

//o node faz o cache do objeto
contadorA.inc()
contadorA.inc()
//Mesmo sendo armazenado em variaveis diferentes, os valores são os mesmo
console.log(contadorA.valor, contadorB.valor)

//Novas instancias pela funcao factory
contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)