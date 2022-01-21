const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

//Desafio 1: Todos os alunos são bolsistas?
//resultado comeca sendo o primeiro elemento do vetor se nao for passado um valor inicial no reduce
const ifbolsista = (resultado, bolsista) => resultado && bolsista //Retorna true ou false
//map retorna somente os valores de bolsista de cada objeto, o reduce testa se todos são bolsistas com a funcao ifbolsista
console.log(alunos.map(a => a.bolsista).reduce(ifbolsista))//Passa a funcao como param


