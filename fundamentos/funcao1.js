function imprimeSoma(a, b) {
    console.log(a + b)
}

imprimeSoma(1, 2)
imprimeSoma(1, '2')

function soma(a = 2, b = 7) {
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))