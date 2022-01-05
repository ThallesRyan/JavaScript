const sequencia = {
    _valor: 1, // convencao
    get valor(){return this._valor++ },//quando o valor for chamado, será somado 1
    set valor(valor){//Quando for passado parâmetro
        if(valor > this._valor){
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)