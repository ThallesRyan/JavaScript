function Pessoa() {
    this.idade = 0
    //Executa a cada 1 segundo
    //This numa arrow function aponta para o escopo de pessoa, ao contrário de uma funcao comum
    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa