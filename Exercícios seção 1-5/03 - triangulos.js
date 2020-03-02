const triangulos = (lado1, lado2, lado3) => {
    if (lado1 == lado2 && lado2 == lado3 && lado1 == lado3){
        return "equilatero"
    } if (lado1 == lado2 || lado2 == lado3){
        return "isosceles"
    } else {
        return "escaleno"
    }
}

console.log(triangulos(2, 2, 2));
console.log(triangulos(2, 3, 3));
console.log(triangulos(2, 3, 4));