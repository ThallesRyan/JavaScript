const pessoa = {
    nome: 'Thalles',
    idade: 19,
    peso: 82
}
//Retorna todas as chaves do objeto passado como parâmetro
console.log(Object.keys(pessoa))
//Retorna todos os valores do objeto passado como parâmetro
console.log(Object.values(pessoa))
//Retorna um array com cada elemento sendo outro array para cada par de chave e valor do objeto
console.log(Object.entries(pessoa))

console.log('')

//For each usado para executar uma funcao para cada elemento do vetor
Object.entries(pessoa). forEach(e =>{
    //exibe os elementos contidos na posicao 0 e 1 do vetor que está no elemento do vetor externo
	console.log(`${e[0]}: ${e[1]}`)
})

console.log('')
//Mesma coisa do anterior, porém usando destructuring 
//Para cada elemento, usa-se o destructuring, atribuindo às variáveis chave e valor os valores das determinadas posições
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento',{
    enumerable: true,//define se pode ser listado/enumerado
    writable: false,//pode ser escrita
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'//se writable for false, n dará para sobreescrever
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))//se uma chave tiver com enumerable:false , ela não poderá ser listada/mostrada

// Object.assign (ECMAScript 2015)
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2)// concatena os objetos, se tiver chave com mesmo nome, será sobrescrita, primeiro parâmetro será o destino das concatenações

Object.freeze(obj)// após uso do freezem o objeto não pode ser mais modificado
obj.c = 1234
console.log(obj)