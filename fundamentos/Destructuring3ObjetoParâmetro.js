function rand({min = 0, max = 1000}){
    const valor = Math.random() * (max - min) + min
    
    return Math.floor(valor)
}

//Objeto que será passado por parâmetro
const obj = {min: 12, max: 10}

//Objeto passado por parâmetro, o retorno será mostrado no console... ]
//se não for passado um objeto com os valores de min e max, o valor será por padrão min = 0 e max = 1000. 
//Se forem passados valores de mine max, eles vão sobrescrever os existentes 
console.log(rand(obj))
console.log(rand({min: 955}))
console.log(rand({}))
console.log(rand())


//Explicação do professor
/*A função rand recebe como parâmetro um objeto qualquer, que possui dois atributos, o max e o min. 
Ou seja, quando criamos um objeto e passamos para a função (ver exemplo abaixo)

const obj = {
    nome: "Daniel",
    min: 10,
    max: 30
}
 
rand(obj)


A função rand irá ignorar o atributo nome e irá captar apenas os atributos min e max. O atributo nome só seria 
capturado pela função se fosse mencionado dentro do destructuring como min e max.



//A const 'valor' também ficou meio nebulosa para mim. Math.random() gera um número randômico, 
e então multiplicamos por (max - min) + min que no exemplo pré-setado fica 1000.

Gostaria de destacar essa parte do pré-setado. Na verdade não fica pré-setado não, quando apenas estamos utilizando de parâmetros padrões. Caso nenhum número fosse passado para max o valor utilizado para max seria 1000 e caso nenhum valor fosse passado para min, o valor utilizado para min seria 0.

Agora vamos para a segunda pergunta como um todo:

//A const 'valor' também ficou meio nebulosa para mim. Math.random() gera um número randômico, 
e então multiplicamos por (max - min) + min que no exemplo pré-setado fica 1000. E então retornamos esse valor arredondado para baixo (Math.floor(valor))? 

Essa é apenas uma formula utilizada para retornar um número aleatório entre dois números. Vamos utilizar os valores:

min: 0

max: 10

Math.random() * (max - min) + min
// Ou seja: Math.random() * (10 - 0) + 0
Vamos supor que random gerou o valor: 

0.14263930273579306

Logo a formula estaria estruturada da seguinte forma:

0,14263930273579306 * (10 - 0) + 0 = 1,4263930274

Quando arredondamos para baixo com o Math.floor(), temos o valor 1.



Quando pegamos outro valor com Math.random() mantendo o mesmo intervalo, obtemos outros números entre 0 e 10. Tenta fazer isso para dar uma observada no comportamento! 


*/