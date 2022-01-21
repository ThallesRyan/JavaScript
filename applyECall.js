const pessoa = {
    nomeCompleto: function(){
        return this.primeiroNome + " " + this.sobreNome
    }
}

const pessoa1 = {
    primeiroNome: "Ana",
    sobreNome: "Paula"
}

console.log(pessoa.nomeCompleto())
console.log(pessoa.nomeCompleto.apply(pessoa1)) //"Aplica" a referência de um método em outros, para que outros objetos possam usar
console.log()

const pessoaECidade = {
    nomeCompleto: function(city, country){
        return this.primeiroNome + " " + this.sobreNome + "," + city + "," + country
    }
}

const pessoa2 = {
    primeiroNome: "João",
    sobreNome: "Miguel"
}
pessoaECidade.nomeCompleto.apply(pessoa2)// não fica "salvo"
console.log(pessoaECidade.nomeCompleto())

console.log(pessoaECidade.nomeCompleto.apply(pessoa2, ["Belo Horizonte", "Brasil"]))
console.log()

const pessoa3 = {
    primeiroNome: "Rafaela",
    sobreNome: "Santos"
}

console.log(pessoaECidade.nomeCompleto.call(pessoa3, "Vitória", "Espírito Santo"))// quase a mesma coisa do apply, porém os params não são em array