const imprimeResultado = function (nota) {
    switch (Math.floor(nota)) {
        case 10:
        case 9:
            console.log('Aluno Destaque');
            break
        case 8: case 7:
            console.log('Aprovado');
            break
        case 6: case 5: case 4:
            console.log('Recuperação');
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado');
            break
        default:
            console.log('Nota inválida');
    }

    console.log('fim');
}

imprimeResultado(10)
imprimeResultado(9)
imprimeResultado(8.5)
imprimeResultado(7.9)
imprimeResultado(6)
imprimeResultado(5.0)
imprimeResultado(4)
imprimeResultado(3)
imprimeResultado(2)
imprimeResultado(1)
imprimeResultado(0)