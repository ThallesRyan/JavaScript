function Pessoa(){
    this.idade = 0
    //Executa determinado comando em tempos em tempos
    setInterval(function(){
        //This pode acessar variáveia de outros escobos
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000/* 1000 milisegundos = 1 min*/)
    

}

new Pessoa

function Pessoa2() {
    this.idade2 = 0

    //A variável self sempre apontará para esses escopo, ao contrário de this
    const self = this
    setInterval(function() {
        self.idade2++
        console.log(self.idade2)
    }/*.bind(this)*/, 1000)
}

new Pessoa2