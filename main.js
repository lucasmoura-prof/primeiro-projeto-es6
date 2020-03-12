function somar (valorA, valorB = 10) {
    console.log(valorA + valorB);
}

somar(10, 11);

const soma = (valorA, valorB = 10) => valorA + valorB;

console.log(soma(5));