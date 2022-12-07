// forma literal
function fun1() { }

// armazenar em uma variável
const fun2 = function () { }

// armazenar em um array
const array = [function (a, b) { return a + b}, fun1, fun2]
console.log(array[0](2, 2)); // para chamar a função do array

// armazenar no atributo de um objeto
const obj = {}
obj.falar = function () {return 'Opa'}
console.log(obj.falar())

// passar função como param
function run(fun){
    fun()
}

run(function () {console.log("Executando...");})

// uma função pode retornar/conter uma outra função
function soma(a,b){
    return function (c){ // podemos usar isso quando temos muito param e precisamos destribuir eles de uma forma mais pausada
        console.log(a + b + c); 
    }
}

soma(1,1)(1) // chamando quando tem uma função dentro da outra



