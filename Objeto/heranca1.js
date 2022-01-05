const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.prototype)//objeto não tem atributo prototype, apenas __proto__
console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)//True
console.log(volvo.__proto__ === Object.prototype)//True
console.log(Object.prototype.__proto__ === null)//True

function MeuObjeto(){}
console.log(typeof Object,"/", typeof MeuObjeto)// function / function
console.log(Object.prototype,"/", MeuObjeto.prototype)// [Object: null prototype] {} / {}
