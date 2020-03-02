const maiorMenor = vetor => {
    let maior = vetor[0]
    let menor = vetor[0]
    for (let i in vetor){
        if(vetor[i] > maior){
            maior = vetor[i]
        } else if (vetor[i] < menor){
            menor = vetor[i]
        }
    }
    console.log(`Maior: ${maior}\nMenor: ${menor}`)
}

maiorMenor([5, 2, 13, 8, 2, 6, 4, 0, 3, 7, 5, 9, 5, 2, 1])