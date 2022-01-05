//Variaveis tipo var tem escopos global e de funcao
//Variaveis tipo let tem escopos de global, de funcao e de bloco


//Var é visto globalmente, pela aplicação inteira,pode haver problemas, pq pode ser sobrescrita por ser utilizada em qualquer lugar do código, priorizar variáveis locais
//Variáveis locais só podem ser usadas no escopo da funcao

{
    {
        {
            {

                var sera = "Será? Só imaginação?"
                console.log(sera);

                let cedo = "Ainda é cedo"
                console.log(cedo)

            }
        }
    }
}

console.log(sera)


function teste(){
    var local = 123
    console.log(local)
}
//Não pode ser acessada se for declarado dentro de uma funcao
teste()
console.log(local)

//Se uma variavel var for mudada em qualquer lugar do programa, o valor anterior será sobreposto
var numero = 1
{
    var numero = 2
    console.log('dentro =', numero)
}

console.log('fora =', numero)