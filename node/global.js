// console.log(global)
//Pode ser acessado em qualquer lugar, é alocado no global do node
//Precisa importar o global do node: require('./global')
global.MinhaApp = Object.freeze({
    saudacao(){
        return 'Estou em todos os lugares!'
    },
    nome: 'Sistema Legal'
})

//Sem o freze
/*global.MinhaApp = {
    saudacao(){
        return 'Estou em todos os lugares!'
    },
    nome: 'Sistema Legal'
}*/