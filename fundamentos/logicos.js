function compras(trabalho1, trabalho2){
    //comprarSorvete será verdadeiro se trablho1 ou trabalho2 for verdadeiro
    const comprarSorvete = trabalho1 || trabalho2
    //comprarTv5o só será verdadeiro se trabalho1 e trabalho2 forem verdadeiros
    const comprarTv50 = trabalho1 && trabalho2
    //const comprarTv32 = !!(trabalho1 ^ trabalho2)// bitwise xor
    const comprarTv32 = trabalho1 != trabalho2 // simula um operador xor, só será verdadeiro se uma das condições forem verdadeiro
    //manterSaudavel será o oposto de comprarSorvete; se comprarSorvete = true, manterSaudavel = false
    const manterSaudavel = !comprarSorvete

    //Retorna o objeto
    //mesma coisa de ser {comprarSorvete:comprarSorvete , comprarTv50: comprarTv50, comprarTv32: comprarTv32, manterSaudavel: manterSaudavel}
    return {comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))

