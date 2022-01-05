const pai = {nome: 'Pedro', corDeCabelo: 'Preto'}

const filha1 = Object.create(pai)//Outra forma de definir um protótipo, nesse modo há tbm possibilidade de definir atributos ao objeto
filha1.nome = 'Ana'
console.log(filha1.corDeCabelo)

const filha2 = Object.create(pai, {
    nome:{value : 'Bia', writable: false, enumerable: true},
    idade:{value: 2, writable: false, enumerable: true}

})

console.log(filha2.nome)
filha2.nome = 'Carla' // writable: false, portanto não será possível mudar o valor(sobrescrever)
console.log(`${filha2.nome} tem cabelo ${filha2.corDeCabelo}`)

//Mostra as chaves do objeto somente, não mostra do proto
console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

//Passa por todos atributos do objeto, mesmo atrubutos do proto
for(let key in filha2){
    //testa se o atributo é do próprio objeto ou do protótipo, retorna true ou false
    filha2.hasOwnProperty(key) ? console.log(key) : console.log(`Por herança ${key}`)// operador tenário 
}



