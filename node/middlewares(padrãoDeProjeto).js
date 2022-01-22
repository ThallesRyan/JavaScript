// middleware pattern (chain of responsibility)
//funcoes que serão passadas por parâmetro e execuitadas
const passo1 = (ctx, next) =>{
    ctx.valor1 = "mid1"
    next()
}

const passo2 = (ctx, next)=>{
    ctx.valor2 = 'midi2'
    next()
}

const passo3 = ctx => ctx.valor3 = 'mid3'


const exec = (ctx, ...middlewares)=>{//exec recebe numeros indefinidos de middlewares(funcoes)
    const execPasso = indice => {
        middlewares && indice < middlewares.length && //testa se o array middlewares existe && se indice é menor que o tamanho do array &&
            middlewares[indice](ctx, () => execPasso(indice + 1))// chama o elemento  do indice do array, e executa, pois é uma funcao, passando os params ctx(objeto), e a própria funcao(recursividade)
    }

    execPasso(0) // para iniciar as chamadas recursivas
}

const ctx = {}

exec(ctx, passo1, passo2, passo3)

console.log(ctx)