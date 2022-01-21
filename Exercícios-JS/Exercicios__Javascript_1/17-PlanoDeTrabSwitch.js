const aumento = (plano, salarioAtual) =>{
    plano = plano.toUpperCase()
    let salarioNovo
switch(plano){
case 'A': salarioNovo = salarioAtual * 0.10 + salarioAtual
return salarioNovo
case 'B': salarioNovo = salarioAtual * 0.15 + salarioAtual
return salarioNovo
case 'C': salarioNovo = salarioAtual * 0.20 + salarioAtual
return salarioNovo
default: return "plano inválido"



}
}
console.log(aumento('c', 1000))