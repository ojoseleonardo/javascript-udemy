console.log(Math.ceil(6.5))

const obj1 = {}
obj1.nome = 'bola'
console.log(obj1.nome)

function obj(nome) {
    this.nome = nome
}

const obj2 = new obj('José')
console.log(obj2.nome)