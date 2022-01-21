function Montante(capitalInicial,taxaDeJuros, tempoDeAplicacao){
let montante
return montante = capitalInicial*Math.pow((1 + (taxaDeJuros/100)),tempoDeAplicacao)
}

function jurosCompostos(){

}

console.log(Montante(12,20,5))