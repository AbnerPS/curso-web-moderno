const arredondarNota = nota => {
    console.log(`Mod: ${nota%5}`)
    if (nota >= 38 && nota%5 == 1){
        nota += 1
    } else if (nota >= 38 && nota%5 == 2){
        nota += 2
    }
    console.log(`Nota arredendada: ${nota}`)
    return nota
}


const avalirNota = nota => {
    nota = arredondarNota(nota)
    if (nota >= 0 && nota <= 100){
        if (nota >= 40){
            return "Aprovado!!!"
        } else {
            return "Reprovado!!!"
        }
    } else {
        return "Nota invalida!!!"
    }
    
}

console.log(avalirNota(51))