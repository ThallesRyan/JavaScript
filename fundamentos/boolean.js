isAtivo = true
console.log(isAtivo)

//!! Mostra se qualquer variável é true ou false. Nega a variável e depois nega novamente, mostrando seu valor boolean
isAtivo = 1
console.log(!!isAtivo)

//São verdadeiros
console.log('Os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!! 'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('Os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))



console.log('Para finalizar...')

console.log(!!('' || null || 0 || ' ' ))
console.log(!!('' || null || 0 || '' ))

//Sem nada é falso
let nome = ''
console.log(nome || 'desconhecido')

//Vazio é verdadeiro
let nome2 = ' '
console.log(nome2 || 'desconhecido2')

let nome3 = "lucas"
console.log(nome3 || 'desconhecido3')