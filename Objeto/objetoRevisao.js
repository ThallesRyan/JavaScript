//Colecao dinâmica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['marca de produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca de produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [
        {
            nome: 'Junior',
            idade: 19
        },
        {
            nome: 'Ana',
            idade: 42
        }

    ],
    calcularValorSeguro: function(){
        //...
    }
}
//Formas de definir valores às variáveis
carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante'
console.log(carro)

// delete carro.condutores
//delete carro.condutores[1].nome
//delete carro.condutores[1].idade
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro)
console.log(carro.condutores)
console.log(carro.condutores.length)//2