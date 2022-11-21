//Operadores lógicos


//Operadores Incremento e Decremento
// ++ --
// let incrementNumber = 4
// console.log(incrementNumber)
// incrementNumber++
// console.log(incrementNumber)
// ++incrementNumber
// console.log(incrementNumber)

// let decrementNumber = 50
// console.log(decrementNumber)

// decrementNumber--
// console.log(decrementNumber)


//Operadores Aritmetricos
// + - / * %

// let note1 = 10
// let note2 = 7.5
// let note3 = 5.5
// let note4 = 3.5
// let avg = (note1+note2+note3+note4)/4
// console.log(Number(avg.toFixed(2)))

//Operadores Relacionais e Iguladade
// < > == === != !== <= >=

let numberRelation1 = 20
let numberRelation2 = 40

let relation = numberRelation1 != numberRelation2 // != Diferente no valor
console.log(relation)

relation = numberRelation1 !== numberRelation2 // !== Diferente no valor ou diferente no tipo
console.log(relation)

relation = numberRelation1 == numberRelation2 // == Igual no valor
console.log(relation)

elation = numberRelation1 === numberRelation2 // === Igual no valor e no tipo
console.log(relation)


//Operador de atribuição

let newNumber = 20
newNumber+= 40
newNumber*= 3
newNumber-= 60
newNumber/= 6
newNumber%= 5



console.log(newNumber)

//Operadores condicionais (Termário)
//(condition) ? true : flase

let value1 = 24
let value2 = 32

const newCondition = value1 <= value2 ? 'Isso é verdade' : 'Isso é uma mentira'
console.log(newCondition)

const newCondition1 = value1 >= value2 ? 'Isso é verdade' 
                    : value1 <= value2 ? 'Isso é verdade, segunda resposta true' : 
                    'Resposta falsa para tudo !!!!'
console.log(newCondition1)