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