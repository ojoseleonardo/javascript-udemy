function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)

}

let opcao = 0
// enquanto opção foi direfente de 114 voce continua, quando der 114 voce vai parar
do {
    opcao = getInteiroAleatorioEntre(0, 1000)
    console.log('Opção gerada foi:', opcao);
} while (opcao != 114)