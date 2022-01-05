// Object.preventExtensions
// evita ser adicionado novos atributos ao objeto, pode ser alterado ou deletado

const produto = Object.preventExtensions({
nome: 'Qulaquer', preco: 1.99, tag: 'Promoção'
})

console.log("Extensível:", Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)
console.log('')
// Object.seal
//Não pode-se adicionar novos atributos, nem apagar, somente alterá-los

const pessoa = {nome: 'Juliana', idade: 35}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)
console.log(' ')

// Object.freeze = selado + valores constantes
//Freeze não permite alterações, adições e nem delete 

const cabelo = {tipo: 'Ondulado', cor: 'Preto'}
Object.freeze(cabelo)

cabelo.cor = 'Azul'
cabelo.tipo = 'Liso'
delete cabelo.tipo
cabelo.tratamento = true
console.log(cabelo)

