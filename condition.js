//IF AND ELSE
//SE E SE NÃO

let num = 10
let num2 = 20
let isAdmin = false

//> < == === != !==
//&& (AND) || (OR) ! (NOT)

if (num >= 10 && num2 >=10) {
    console.log('Verdade')
} else {
    console.log('Falso')
}
if (num >= 10 || num2 <=10) {
    console.log('Verdade')
} else {
    console.log('Falso')
}

if (isAdmin) {
    console.log('Ele  é Admin, tem permissão')
} else {
    console.log('Ele não é Admin')
}

if (num>= 10){
    console.log('Sou maior')
}else if (num >=10 && num2 <=20){
    console.log('Segunda resposta verdade')
}else {
    console.log('Resposta falsa')
}

//SWITCH

let myExpression = 'd'

switch (myExpression) {
    case 'a':
        console.log('Apertou o A')
        break
    case 'b':
        console.log('Apertou o B')
        break
    case 'c':
        console.log('Apertou o C')
        break
    default:
        console.log('Você apertou outra tecla', myExpression)
        break
}

//Calculadora

function calc (num1, operator, num2) {
    let result

    switch(operator){
        case "+":
            result = num1 + num2
            break
        case "-":
            result = num1 - num2
            break
        case "*":
            result = num1 * num2
            break
        case "/":
            result = num1 / num2
            break
        default:
            console.log("Digite o operador correto")
            break
    }
    return result
}

console.log(calc(8, '/', 2))