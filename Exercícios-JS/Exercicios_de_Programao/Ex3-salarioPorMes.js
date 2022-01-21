const salario = (horasTrab, valorPorHora) => `Salário de R$${(horasTrab * valorPorHora).toFixed(2)}`

console.log(salario(150, 40.5))