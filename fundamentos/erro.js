function imprimeErro(erro) {
    // throw new Error('Erro aqui dog!')
    // throw true
    throw 'priviet'
}

function imprimirNomeGritando(obj) {
    try {
        console.log(obj.errado.toUpperCase(), '!!!')
    } catch (TypeError) {
        imprimeErro(TypeError)
    } finally {
        console.log('Sempre to aqui Bro!')
    }

}
const obj = { nome: 'João' }
imprimirNomeGritando(obj)