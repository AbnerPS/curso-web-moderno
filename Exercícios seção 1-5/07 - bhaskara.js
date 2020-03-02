const bhaskara = (a, b, c) => {
    const resultados = []
    const delta = Math.pow(b,2) - 4 * a * c
    if (delta < 0){
        console.log(delta)
        return "Valor de Delta negativo!!!"
    } else {
        resultados.push((- b + Math.sqrt(delta))/(2 * a))
        resultados.push((- b - Math.sqrt(delta))/(2 * a))
        return resultados
    }
}

console.log(bhaskara(-7, 22, 12))