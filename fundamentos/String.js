const escola = "cod3r"

console.log(escola.charAt(4))//Pega o caractere da posição 4 da String
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3))//Mostra o código do caractere de acordo coma a tabela ascii 
console.log(escola.indexOf('3'))//Mostra a posição do caractere passado como parâmetro

console.log(escola.substring(1))//Faz uma outra string a partir da pos passada
console.log(escola.substring(0,3))


console.log('Escola'.concat(escola).concat("!"))//concatena a String 'escola' com o conteúdo da variável escola que concatena com o caractere "!"
console.log('Escola' + escola + "!")
console.log(escola.replace(3, 'e'))//Substitui o caractere da pos 3 por 'e'

console.log('Ana, Maria, Pedro'.split(','))//Separa uma string no caractere passado por parametro e coloca em cada pos do vetor










