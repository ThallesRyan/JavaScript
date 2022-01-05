// pessoa -> 123 -> {...} // uma variável aponta para um local na memória, que aponta para o objeto
//Um objeto só pode ser atribuído a uma constante uma vez
const pessoa = { nome: 'Joao' }
//Não está sendo atribuído, está sendo adicionado ou modificado um atributo de um objeto
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...} // tentar atribuir pessoa a outro endereço, irá gerar erro
//pessoa = {nome: 'Ana'} //erro

//irá "congelar" o objeto, nada poderá ser modificado ou adicionado ao objeto
Object.freeze(pessoa)

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)
console.log(' ')

//Criação de um objeto já com o freeze
const pessoaConstante = Object.freeze({nome: 'Joao'})
pessoaConstante.nome = 'Maria'
pessoaConstante.idade = 19
console.log(pessoaConstante)
