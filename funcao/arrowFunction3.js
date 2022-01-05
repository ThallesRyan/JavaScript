let comparaComThis = function (param) {
    console.log(this === param)
}

//This e global são iguais
comparaComThis(global)

const obj = {}
//Liga a funcao comparaComThis com o obj
comparaComThis = comparaComThis.bind(obj)
//agora fica falso 
comparaComThis(global)
//Obj e this são iguais agora
comparaComThis(obj)


let comparaComThisArrow = param => console.log(this === param)
//global diferente de this na arrow function
comparaComThisArrow(global)
//module.exports igual a this na arrow function
comparaComThisArrow(module.exports)

//Mesmo tentando ligar comparaComThisArrow com obj, a ligação do this do arrow function é mais forte
comparaComThisArrow = comparaComThisArrow.bind(obj)

//global permanece diferente de this na arrow function
comparaComThisArrow(obj)
//module.exports permanece igual a this na arrow function
comparaComThisArrow(module.exports)