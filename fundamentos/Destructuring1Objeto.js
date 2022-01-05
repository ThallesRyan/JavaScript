const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 100
    }
}

//O destructing está tirando os valores nome e idade do objeto pessoa, e atribuindo a constantes de mesmo nome no programa
const {nome, idade} = pessoa
console.log(nome, idade)

console.log(pessoa.nome)
console.log(pessoa.idade)

//Pega o valor nome e idade do objeto pessoa e atribuem as variáveis "n" e "i"
const {nome: n, idade: i} = pessoa
console.log(n, i)


//Quando não se encontra o atributo no objeto, retorna-se undefined
const {sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)

//Para pegar valores que estão em um objeto dentro de outro objeto
const{ endereco:{logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)

//Dá erro quando se tenta pegar valores de um objeto que não existe no objeto principal
const {conta:{ag, num}} = pessoa
