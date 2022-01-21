function inverso(valor){
    const tipo = typeof valor
   if(tipo == "boolean") return !valor
   else if(tipo == "number") return -valor
   else return `esperado boolean ou number, parâmetro passado é do tipo ${tipo}`
}

console.log(inverso(5))
console.log(inverso(false))
console.log(inverso('banana'))