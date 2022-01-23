//Instalar:  npm i node-schedule@1.3.0 -E
//Define uma data e horário para determinada funcao ser executada
//  * * * * * * second(0-59), minute(0-59), hour(0-23), day of month(1-31), month(1-12), day of week(0-7)

const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * * * * *', function(){// a '/' faz com que o código seja executado de tempo em tempo, sem isso ele executaria somente no tempo exato indicado 
    console.log("Executando Tarefa 1!", new Date().getSeconds())
})

//Define um tempo para executar uma funcao após o início do programa
setTimeout(function(){
    tarefa1.cancel()// cancela o temporizador
    console.log("Cancelando Tarefa 1!")
},20000)//20 mil millisegundos segundos para acionar essa função(20 segundos)

// setImmediate //executa imediatamente, ao contrário do timeOut
// setInterval, executa uma funcao de tempo em tempo informado

const regra = new schedule.RecurrenceRule() //define um tempo de execucao recconte de uma funcao
regra.dayOfWeek = [new schedule.Range(0,6)] //define os dias de execucao(segunda a domingo), todos os dias de segunda a domingo...
regra.hour = 20 // ...executará todas as 20 horas...
regra.second = 30 // ...e 30 segundos(de qualquer minuto) 

const tarefa2 = schedule.scheduleJob(regra,function(){
    console.log('Executando Tarefa 2!', new Date().getSeconds())
})