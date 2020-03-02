function jurosSimples (capital, taxa, tempo){
    capital += capital * (taxa/100)
    return capital * tempo
}

function jurosCompusto (capital, taxa, tempo){
    let valor = 0
    for (let i = 0; i < tempo; i++){
        capital += capital * (taxa/100)
        valor += capital
    }
    return valor
}

console.log(jurosSimples(20, 10, 2))
console.log(jurosCompusto(20, 10, 2))