let a = 1
console.log(a)

//Uma promessa de algo que será executado no futuro e algo que será devolvido no futuro
let aPromessa = new Promise(function(resolve){
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])// "resolve", retorna o array
})

const primeiroElementoOuLetra = primeiroElementoOuLetra => primeiroElementoOuLetra[0]
//Para pegar o valor do resolve do promise, usa-se o then. Recebe somente um parâmetro
aPromessa
.then(primeiroElementoOuLetra)// o valor retornado, será usado no próximo then e assim por diante
.then(primeiroElementoOuLetra)
.then(letra => letra.toLowerCase())
.then(letrasMin => console.log(letrasMin))

// pode passar o nome da funcao como param, ou passar a funcao em si

