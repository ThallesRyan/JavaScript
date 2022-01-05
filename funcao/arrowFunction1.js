let dobro1 = function(a){
    return 2*a
}

let dobro2 = (a) =>{
    return 2 * a
}

let dobro3 = a => 2 * a // return implícito
console.log(dobro3(2))


let mult = (a,b) => a * b
console.log(mult(3,2))


let ola1 = function(){
    return 'olá'
}

let ola2 = () => 'olá' //Não possui param
let ola3 = _ => 'Olá' // possui um param

console.log(ola1())