// novo recurso

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 100,
    }

}


const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: nomezada, idade: idadezada } = pessoa
console.log(nomezada, idadezada)

const { endereco: { logradouro: ruazada, numero } } = pessoa
console.log(ruazada, numero)