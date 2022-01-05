const a = 1
const b = 2
const c = 3
//Versao mais antiga
const obj1 = {a: a, b: b, c: c}
//Versão mais recente
const obj2 = {a , b, c}
console.log(obj1, obj2)


const nomeAttr = 'nota'
const valorAttr = 7.87

const obj3 = {}
//Um modo de criar um atributo para um objeto por meio de uma variável,e atribuindo um valor
obj3[nomeAttr] = valorAttr
console.log(obj3)

//Cria um objeto com nome do atributo e valor por meio de uma variável
const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4)

//Objetos com funções como atributos
const obj5 = {
    funcao1: function(){
        // ...
    },
    funcao2(){
        // ...
    }

}

console.log(obj5)