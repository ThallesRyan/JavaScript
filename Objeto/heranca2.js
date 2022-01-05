//Cadeia de protótipos (prototype chain)
Object.prototype.attr0 = '0'// não fazer isso em casa

const avo = {attr1: 'A'}// tem como protótipo Object.prototype
const pai = {__proto__: avo, attr2: 'B', attr3: '3'} //tem como protótipo avo
const filho = {__proto__: pai, attr3: 'C'}// tem como protótipo pai

console.log(filho.attr1)// se o atributo n for encontrado no objeto, será procurado nos protótipos

console.log(filho.attr0)//acha o atributo no Object.prototype, onde foi definido o atributo attr0

console.log(filho.attr2)

console.log(filho.attr3)// imprimi a primeira ocorrência do atributo

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 // shadowing
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`// Super referencia uma funcao que está no protótipo do objeto
    }
}

Object.setPrototypeOf(ferrari, carro)// Define o segundo parâmetro sendo protótipo do primeiro
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())