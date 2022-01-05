class Lancamento {
    constructor(nome = 'Genérico', valor = 0){//valores padrão
    this.nome = nome
    this.valor = valor
    
    }
}

class cicloFinanceiro {
    constructor(mes, ano){
        this.mes = mes
        this.ano = ano
        this.Lancamentos = []
    }

    addLancamentos(...Lancamentos){//Pode receber quantos parâmetros forem necessários, e os coloca em um array
        Lancamentos.forEach(l => this.Lancamentos.push(l))//para cada elemento do array
    }

    sumario(){
        let valorConsolidado = 0
        this.Lancamentos.forEach(l => {
            valorConsolidado += l.valor//pega o valor em cada objeto contido no array lancamentos
        })

        return valorConsolidado

    }
}

const salario = new Lancamento('Salario', 45000)
const contaDeLuz = new Lancamento('Luz', -220)

const contas = new cicloFinanceiro(6, 2018)
contas.addLancamentos(salario, contaDeLuz)
console.log(contas.sumario())