// IIFE -> Immediately Invoked Function Expression

//Usado para fugir do escopo global, a funcao é executada imediatamente, ela se auto invoca
(function(){

    console.log('Será executado na hora')
    console.log('Foge do escopo mais abrangente')
})()