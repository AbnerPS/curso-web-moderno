const pontuacaoBasquete = (pontos) => {
    let record = pontos[0]
    let piorPonto = pontos[0]
    let piorJogo = 0
    let bateuRecord = 0
    for (let i in pontos){
        if (pontos[i] > record){
            record = pontos[i]
            bateuRecord++
        }
        if (pontos[i] < piorPonto){
            piorPonto = pontos[i]
            piorJogo = ++i
        }
    }
    return [bateuRecord, piorJogo]
}

console.log(pontuacaoBasquete([2, 1, 15, 2, 33, 0, 16, 35, 40]))