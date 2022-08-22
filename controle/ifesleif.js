Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}

const imprimeResultado = function (nota) {
    if (nota.entre(9, 10)) {
        console.log('Aluno Destaque')
    } else if (nota.entre(7, 8.99)) {
        console.log('Aprovado')
    } else if (nota.entre(4, 6.99)) {
        console.log('Recuperação');
    } else if (nota.entre(0, 3.99)) {
        console.log('Reprovado');
    } else {
        console.log('Nota inválida!');
    }
    console.log('fim');
}


imprimeResultado(9)
imprimeResultado(5)
imprimeResultado(2)
imprimeResultado(11)
