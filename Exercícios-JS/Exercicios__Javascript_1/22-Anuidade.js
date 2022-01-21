/*Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A
anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido. */

const anuidade = (mes,valorAnuidade)=>{
    let totalComJuros = 0
    if(mes > 1 && mes <= 12){
        for(let i = 1; i < mes; i++){
            valorAnuidade = valorAnuidade + valorAnuidade * 0.05
        }
    }else if(mes == 1) return valorAnuidade
    else return "Mês inválido"

    return valorAnuidade.toFixed(2)
}

console.log(anuidade(13,100))