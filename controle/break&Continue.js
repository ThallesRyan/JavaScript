const nums = [1,2,3,4,5,6,7,8,9,10]

for (x in nums) {
    //O break quebra a execução do laço externo ao que está sendo executado
    //o break no bloco do if irá parar a execução do for após encontrar o número 5
    //Irá sair imediantamente do laço
    if (x == 5) {
        break
    }
   console.log(`${x} = ${nums[x]}`)
}

for(y in nums){
    //Para 1 repetição do bloco externo apenas, após isso, continua a repetição
    if(y == 5){
        continue
    }
    console.log(`${y} = ${nums[y]}`)
}

//não usar
externo:
for (a in nums) {
    for (b in nums) {
        if(a == 2 && b == 3) break externo
        console.log(`Par = ${a},${b}`)
    }
}