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

let wordToArray = "Quem ta gostando diz Hey!!"
console.log(Array.from(wordToArray))