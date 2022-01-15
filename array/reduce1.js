const alunos = [
    {nome: 'Joao', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: "Ana", nota: 8.7, bolsista: true}
]

console.log(alunos.map(a => a.nota))// cada elemento do array é um objeto. O map recebe a funcao que passa por cada elemento do array, retornando a nota, retornando um array de notas

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
}, 0)

console.log(resultado)


