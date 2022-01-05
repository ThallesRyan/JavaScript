class Avo{
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }
}

class pai extends Avo {//define protótipo entre as classes
    constructor(sobrenome, profissao = 'Professor'){
        super(sobrenome)//Super referencia a variável no protótipo da classe, ele passa o sobrenome recebido para o atributo sobrenome do protótipo
        this.profissao = profissao
    }
}

class Filho extends pai {
    constructor(){
        super('Silva')// super chama o construtor do pai, passando só o primeiro parâmetro, se n for passado o segundo parâmetro, ele assumirá o valor padrao "professor"
    }
}

const filho = new Filho
console.log(filho)