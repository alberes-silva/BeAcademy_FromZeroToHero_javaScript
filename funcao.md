## O que é uma função no Javascript

Uma função no JavaScript é um bloco de código projetado para executar uma tarefa especifica

Uma função no JavaScript é executada quando "algo" a invoca (chama)

Uma função no JavaScript é definida com a palavra-chave function, seguida por um name, seguido por parênteses().

Os nomes das funções podem conter letras, dígitos, sublinhados e cifrões (mesmas regras das variáveis)

Os parênteses podem incluir nomes de parâmetros separados por vírgulas: 
(parâmetro1, parâmetro2,...)

O código a ser executado, pela função, é colocado entre chaves: {}

# Documentação: https://www.w3schools.com/js/js_functions.asp

# Anatomia Function

funtion myFuntion (){
    //my code
}

# Anatomia Function Anonymous

const myFunction = function {
    //My code
}

# Execução

myFunction ()

# Parâmetros da função

function myFunctionParameters(parameters1, parameters2){
    //My code
}

# Argumentos da execução


## Teória do prato de comida
    Vou montar meu prato de comida para almoçar

function almocar (comida1, comida2,comida3) {
    return `Meu alomoço teve ${comida1}, ${comida2}, ${comida3}`;
}

//Preciso de um prato para armazenar a comida
const prato= almocar('arroz', 'feijão', 'frango')

console.log(prato)

## Arrow Function, maneira mais moderna de criar uma função

# Exemplo
const arrowFunction = () => {
    console.log(`Arrow Function`)
}

arrowFunction()

# Exemplo com parâmetros e retorno

const arrowFunction = (num1, num2) => {
    total = num1 + num2
    return total
}

const result = arrowFuction(90,20)
console.log(result)