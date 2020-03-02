const calcularMedia = vetor => {
    let somaElementos = 0
    let media = 0
    for (let i in vetor){
        somaElementos += vetor[i] 
    }
    media = somaElementos/vetor.length
    console.log(`Média: ${media}`)
}

calcularMedia([2, 3, 6, 4])