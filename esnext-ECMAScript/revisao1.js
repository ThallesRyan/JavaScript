// let e const
{
    var a = 2
    let b = 3
    console.log(b)
}
console.log(a)

// template String
const produto = 'iPad'
console.log(`${produto} é caro!`)

// destructuring
const [l, e, ...tras] = 'Thalles' // a primeira e a segunda letra sao atribuidas a l , e , respectivamente, e as restantes no ...tras, que transforma em array
console.log(l, e, tras) // T h [ 'a', 'l', 'l', 'e', 's' ]

const [x,y] = [1,2,3]
console.log(x, y)

const {idade: i, nome} = {nome: 'Ana', idade: 9} // pega exatamente os nomes dos atributos, ao contrário do array usando destructuring. Renomeia idade para i

console.log(i, nome)