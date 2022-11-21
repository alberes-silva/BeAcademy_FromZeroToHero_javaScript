//Manipulando String e Arrays
/*
    Separando um texto que contém espaço, em um novo array onde
    cada texto é uma posição do array.
*/

// let newPhrase = "Fala meus queridos e queridas"
// console.log(newPhrase)
// let phraseToArray = newPhrase.split(' ')
// console.log(phraseToArray)

//Convertendo novamente o texto para string
// .join (" ") -> Permite que eu gere separações (-,_/'')

// let phraseModify = phraseToArray.join(" ").toLowerCase();
// console.log(phraseModify)

//Manipulando String e Arrays
//Verificar se contém palavras ou letras

// let stringInclude = "Veem ne mim Paylivre, pay pay"
// console.log(stringInclude.includes("Paylivre"))

//Objetos

// let arrayInclude = [
//     "PayLivre",
//     "Veem",
//     "ne mim",
//     "Meu amor",
//     {
//         firstName:"Pay",
//         lastName: "Livre"
//     }
// ]

// console.log(arrayInclude.includes("PayLivre"));

//String startWith
// console.log(stringInclude.startsWith("ve"))

//String endWith
// console.log(stringInclude.endsWith("or"))

//Transformando um array em caracteres

// let wordToArray = "Quem ta gostando diz Hey!!"
// console.log(Array.from(wordToArray))

//Manipylando Arrays
const animals = ["pinto","Urso","Elefante","Girafa","Leão"]
console.log(animals)

//Adicionar item no fim

console.log(animals.push("Rato"))
console.log(animals)

//Adicionar item no inicio
console.log(animals.unshift("Porco"))
console.log(animals)

//Remover item no fim
console.log(animals.pop())
console.log(animals)

//Remover item do inicio
console.log(animals.shift())
console.log(animals)

//Pegar somente alguns elementos
//Não modificar o array

console.log(animals.slice(0,3))
console.log(animals)

//Remover um item ou mais do Array
// animals.splice(1,3)
console.log(animals)

//Encontrar a posição do array
let index = animals.indexOf('Leão')
console.log(index)
animals.splice(index,1)
console.log(animals)