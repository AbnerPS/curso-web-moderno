const parImpar = vetor => {
    let par = 0
    let impar = 0
    for (let i in vetor){
        if (vetor[i]%2 == 0){
            par++
        } else {
            impar++
        }
    }
    console.log(`${par} numeros pares e ${impar} numeros impares`)
}

parImpar([2, 3, 8, 5, 8, 6, 7, 10])