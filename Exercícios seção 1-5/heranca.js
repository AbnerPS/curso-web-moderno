const gerador = {
    modelo: 'GE',
    carga: 1000,
    temp: 85
}

const geradorGas = {
    __proto__: gerador
}

let geradorDiesel = {}
Object.setPrototypeOf(geradorDiesel, gerador)

console.log(geradorGas.carga);
console.log(geradorDiesel.temp);