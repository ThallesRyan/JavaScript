const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

//executados para cada elemento do array usando o método filter
const chines = f => f.pais === "China" 
const mulherChinesa = f => f.genero === 'F'
//Irá smepre manter o menor salário no contador do reduce
const menorSalario = (menorSalario,atual) => {
    return atual.salario < menorSalario.salario  ? atual : menorSalario
}

axios.get(url).then(Response => {
    const funcionarios = Response.data
    

    const func = funcionarios
    const mulheresChinesas = func.filter(chines).filter(mulherChinesa).reduce(menorSalario)

    console.log(mulheresChinesas)


})






