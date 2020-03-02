const aritmetica = (num1, num2) => {
    console.log(`Soma = ${num1 + num2}`)
    console.log(`Subtração = ${num1 - num2}`)
    console.log(`Multiplicação = ${num1 * num2}`)
    console.log(`Divisão = ${(num1 / num2).toFixed(2)}`)
}

aritmetica(5,3)