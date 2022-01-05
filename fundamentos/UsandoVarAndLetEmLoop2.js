const funcs = []

for(var i = 0; i <10 ; i++){
    //Está sendo colocado no array a funcao, que executa o console.log
    funcs.push(function(){
        console.log(i)

    })
}

funcs[2]()
funcs[8]()
funcs[9]()

console.log(" ")

const funcs2 = []

for(let j = 0; j <10 ; j++){
    //Está sendo colocado no array a funcao, que executa o console.log
    funcs2.push(function(){
        console.log(j)

    })
}

funcs2[2]()
funcs2[8]()
funcs2[9]()
