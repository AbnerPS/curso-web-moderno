const exibirReais = valor => {
    return  `R$${valor.toFixed(2).toString().replace(".", ",")}`
}

console.log(exibirReais(12.32146513218))