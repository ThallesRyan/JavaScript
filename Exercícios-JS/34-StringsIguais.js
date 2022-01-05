const saoIguais = (string1, string2) =>{
    string1 = string1.toUpperCase()
    string2 = string2.toUpperCase()
    if(string2 === string1)return true
    else return false

}

console.log(saoIguais("nome", "noMe"))