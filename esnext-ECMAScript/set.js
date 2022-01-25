//como se fosse um array, mas não aceita repeticao/ não indexada
const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Corinthians')
times.add('Flamengo')
times.add('Vasco')

console.log(times)
console.log(times.size)// retorna o tamanho 
console.log(times.has('vasco'))// testa se tem o elemento
console.log(times.has('Vasco'))
times.delete('Flamengo') // deleta
console.log(times.has('Flamengo'))

// Criacao de um set a partir de um array
const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas'] // não aceita o elemento repetido
const nomesSet = new Set(nomes)
console.log(nomesSet)