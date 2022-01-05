/*Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.
 */

const crescimento = (alturaCrianca1, alturaCrianca2, taxa1, taxa2)=>{
   let anos = 0
    
    if(alturaCrianca1 > alturaCrianca2){  
        if(taxa2 > taxa1){
            while(alturaCrianca2 < alturaCrianca1){
                alturaCrianca2 += taxa2
            }
            return `A criança menor ultrapassará a maior em ${anos}.`
        }
    }else if(alturaCrianca2 > alturaCrianca1){
        if(taxa1 > taxa2){
            
            while(alturaCrianca1 > alturaCrianca2){
                alturaCrianca1 += taxa1   
            }
             return `A criança menor ultrapassará a maior em ${anos} anos.`
        }else return "A criança menor não ultrapassará a maior."
    }

}



console.log(crescimento(100, 130, 10, 5))