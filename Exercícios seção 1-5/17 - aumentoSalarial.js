const aumentoSalarial = (plano, salario) => {
    let novoSalario
    switch (plano){
        case "A":
            novoSalario = salario + (salario*0.10)
            console.log(`Novo salario = ${novoSalario}`)
        break

        case "B":
            novoSalario = salario + (salario*0.15)
            console.log(`Novo salario = ${novoSalario}`)
        break

        case "C":
            novoSalario = salario + (salario*0.20)
            console.log(`Novo salario = ${novoSalario}`)
        break

        default:
            console.log("Plano de trabalho invalido!!!")
        break
    }
}

aumentoSalarial("C", 1200)