const fatorial = numero => {
    let fatorial = 1
    for (let i = 1; i <= numero; i++){
        fatorial = fatorial * i
        console.log(`${i}! = ${fatorial}`)
    }
}

fatorial(8)