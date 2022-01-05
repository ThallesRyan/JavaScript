/*Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam
como parâmetros um número n (número de termo), a1 (o primeiro termo) e r (a razão) e escreva os n termos ,
bem como a soma dos elementos.
*/
const PA = (n,a1,r) => {
    let elementosPA = []
    let soma = 0
    
    for(let i = 1; i <= n; i++){
        elementosPA.push(r * i)
        soma += elementosPA[i - 1]
        
    }

    console.log(elementosPA)
    console.log(`Soma dos elemento da PA:${soma}`)
    console.log(' ')
    
}

const PG = (n,a1,r)=>{
    let elementosPG = []
    let soma=0
    let proximoElemento = 1;
    for(let i = 1; i <= n; i++){
        proximoElemento = proximoElemento * r
        elementosPG.push(proximoElemento)
        soma += elementosPG[i - 1]
    }
    console.log(elementosPG)
    console.log(`Soma dos elemento da PG:${soma}`)
    console.log(' ')
}
PA(5, 4,4)

PG(5, 4,4)