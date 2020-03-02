function unirVertores (vetorInt, vetorString, vetorDouble) {
    let vetorResult = vetorInt.concat(vetorString, vetorDouble)
    console.log(vetorResult);
}

unirVertores([2,4,8], ["dois", "quatro", "oito"], [8.2, 4.8, 2.4])