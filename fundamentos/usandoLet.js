//Variaveis tipo var tem escopos global e de funcao
//Variaveis tipo let tem escopos de global, de funcao e de bloco

//A variavel let não é alterada se usada dentro de outro bloco
let numero = 1

{
    let numero = 2
    console.log('dentro =', numero)
}

console.log('fora =', numero)

let numero2 = 1

{
    let numero3 = 2
    console.log('dentro =', numero2)
}

console.log('fora =', numero2)

