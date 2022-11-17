//Exemplo 1


    //Method
function myFristFunction() {
    console.log('Olha a função!!!')
}

//Execute
myFristFunction()

//Função com parâmetros e argumentos

//number1 = 32 e number2 = 24
function sum(number1, number2){
    console.log(number1 + number2)
}

sum(32, 24)


//Função com retorno

function myFristFunctionWithReturn(num1, num2){
    let total = num1 + num2
    return total
}
// -> retirar da função um total = ???


console.log(myFristFunctionWithReturn(20,20))

//Restaurante

function meuPratoDeComida(comida1, comida2, comida3, comida4){
    return `Meu prato de comida é: ${comida1}, ${comida2}, ${comida3}, ${comida4}`
}

const prato = meuPratoDeComida('Arroz', 'feijão', 'bife', 'batata frita')

console.log(prato)

//Arrow Function
const myFirstArrowFunction = (number1, number2) => {
    let total = number1 + number2
    return total;
}

const result = myFirstArrowFunction (20,20)
console.log(result)