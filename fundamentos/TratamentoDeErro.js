function tratarErroElancar(erro){
    // throw new Error('...')
    //throw 10
    //throw true
    // throw 'mensagem
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}


function imprimirNomeGritado(obj){
    //Tenta o código e se não funcionar, executa o catch...
    //No final executa o finally, independente de entrar no catch
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    }catch(e){
        tratarErroElancar(e)
    }finally{
        console.log('Final')
    }
}

const obj = {nome: 'Roberto'}
imprimirNomeGritado(obj)