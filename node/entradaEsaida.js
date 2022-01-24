const anonimo = process.argv.indexOf('-a') !== -1 // quando o arquivo é chamado pelo node passando o parametro -a //node entradaEsaida.js -a
console.log(anonimo)

if(anonimo){
    process.stdout.write('Fala Anônimo!\n') // método de saida
    process.exit() // termina a execucao 
} else {
    process.stdout.write("Informe seu nome: ")
    process.stdin.on('data', data =>{// recebe o que foi digitado após o enter
        const nome = data.toString().replace('\n', '') // transforma em string e substitui o \n que veio com os dados do teclado

        process.stdout.write(`Fala ${nome}!!\n`)
        process.exit()
    })
}
