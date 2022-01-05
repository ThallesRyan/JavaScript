const anoBissexto = function (ano) {
    if (ano >= 400) {
        let resto = ano % 400
        if (resto != 0) {
            if (resto >= 100) {
                resto = resto % 100
                if (resto != 0) {
                    resto = resto % 4
                    if (resto != 0) {
                        return false
                    } else { return true }

                } else return true
            } else if (resto < 100) {
                resto = resto % 4
                if (resto != 0) {
                    return false
                } else return true
            }
        } else return true
    }else if(ano < 400 && ano > 99){
        let resto = ano % 100
        if(resto != 0){
            resto = resto % 4
            if(resto != 0 ){
               return false   
            }else return true
        }else return true

    }else if(ano < 100){
        let resto = ano % 4
        if(resto != 0){
            return false
        }else return true
    }
}

console.log(anoBissexto(16))



