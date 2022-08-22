function soBoaNoticia(nota) {
    if (nota >= 7) {
        console.log('Aprovado!')
    } else {
        console.log('Reprovado!')
    }
}

soBoaNoticia(6.9)
soBoaNoticia(7.1)
soBoaNoticia('Epa!') // cuidado com js que é fracamente tipado