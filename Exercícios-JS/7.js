function delta(ax2,bx,c){
    let Valordelta = (Math.pow(bx,2)) - (4 * ax2 * c)
    if(Valordelta > 0){
        let resultados = []
        let x1 = (-bx + Math.sqrt(Valordelta))/2*ax2 
        let x2 = (-bx - Math.sqrt(Valordelta))/2*ax2 
        
        resultados.push(x1)
        resultados.push(x2)

    return resultados

    }else return console.log("Delta é negativo")
}

console.log(delta(1,10,7))