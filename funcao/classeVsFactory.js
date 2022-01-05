//Associando a funcao falar do objeto criado ao clique do mouse no body, dá undefined no nome no console.log
//document.getElementsByTagName('body')[0].onclick = p1.falar
class Pessoa{
    constructor(nome){
        this.nome = nome
    }

    falar(){
        console.log(`Meu nome é ${this.nome}` )
    }

}

const p1 = new Pessoa('João')
p1.falar()

//Associando a funcao falar do objeto criado ao clique do mouse no body, exibe o console.log corretamente

const criarPessoa = nome =>{
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('Joao')
p2.falar()