// armazenando funcção em uma varíavel
const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 2)

// armazenando uma função arrow em uma varíavel
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 20))


// retorno implícito
const subtracao = (a, b) => a - b

console.log(subtracao(2, 3))