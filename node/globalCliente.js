//Importando global do node
require('./global')

console.log(MinhaApp.saudacao())

MinhaApp.nome = "Eita!"// Não permite mudanca pois está sendo usado freeze no objeto
console.log(MinhaApp.nome)