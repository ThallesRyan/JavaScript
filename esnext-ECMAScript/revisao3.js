// ES8: Object.values/Object.entries
const obj = { a: 1, b: 2, c: 3 }
console.log(Object.values(obj))
console.log(Object.entries(obj))

// Melhprias na Notação Literal
const nome = 'Carla'
const pessoa = {
    nome,
    ola(){
        return 'Oi gente!'
    }
}
console.log(pessoa.nome, pessoa.ola())
console.log()

//class 
class Animal {
    constructor(patas = 4){
        this.patas = patas
    }
    beber(){
        return '*Lick lick lick'
    }
    getPatas(){
        return this.patas;
    }
}
class Cachorro extends Animal {
    falar() {
        return 'Au au!'
    }
}
const meuDog = new Cachorro(3)
console.log(meuDog.falar())
console.log(meuDog.beber())
console.log(meuDog.getPatas())

