// 1. Declare uma variável

var person

//2. Que tipo de dado é a variável acima?
console.log(typeof person) //underfined

/* 3. Declare uma variável e atribua valores para cada um dos dados:
        * name: string
        * age: Number (integer)
        * weight: Number (float)
        * isAdmin: Boolean
        * isAMan: Boolean

*/

var person = {
    name: "Moacir",
    age: 30,
    weigth: 69,
    isAdmin: false,
    isAMan:true
}

/*
    4. A variável human abaixo é de que tipo de dados?

    4.1 Atribua a ela as mesmas propriedades e valores do exercício 3.

    4.2 Mostre no console a seguinte mensagem:
    O humano <name> tem o peso <weight> kg.

    */

    console.log(typeof person) //object

let human = {
    name: "Moacir",
    age: 30,
    weigth: 69,
    isAdmin: false,
    isAMan: true
}
console.log(`O humano ${human.name} tem o peso de ${human.weigth}Kg.`)

/* 5. Declare uma variável do Array, de nome humans e atribua a ela 
nenhum valor. ou seja, somente o Array vazio.*/

let humans = []

/* 6.Reatribua valor a variável acima, colocando dentro dela 
   o objeto human da questão 4. (Não copiar e colocar o objeto, 
   mas usar o objeto criado inserir ele no Array)
        */

humans = [
    human
 ]
console.log(humans)

// 7. Coloque no console o valor da posição zero do Array acima
    
console.log(humans)
console.log(humans[0].name)

// 8. Crie um novo objeto human e coloque na posição 1 do Array humans

let newHuman = {
    name: "Luan Monteiro",
    age: 30,
    weigth: 90,
    isAdmin: true,
    isAMan: true
}

console.log(newHuman)

humans = [
    human,
    newHuman
 ]
console.log(humans)
console.log(humans[1])

//a)
   // console.log(a)
   // var a = 1 //hoisting
// resposta?? Undefined

//b)
    let a
    console.log(a)
    {
        let a = 2
        console.log(a)
    }
    console.log(a)
//Resposta?? undefined 2 undefined


//c)
    console.log(b)
    {
        let b = 3
        console.log(b)
    }
    console.log(b)
//Resposta?? error

//d)
    const c = 10
    {
        console.log(c)
        const c = 20
        console.log(c)
    }
//Resposta?? error