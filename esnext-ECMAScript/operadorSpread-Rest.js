// operador ...rest(juntas)/spread(espalhar)
// usa-se rest como parâmetro de funcao
// usa-se spread com objetos e com array

//Spread com objeto
const funcionario = { nome: 'Maria', salario: 12348.99 }
const clone = { ativo: true, ...funcionario }// espalha todos os atributos do objeto funcionario, dentro do array clone
console.log(clone)

// Spread com array

const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela']// espalha todos os elementos do array grupoA dentro do array grupoFinal
console.log(grupoFinal)
