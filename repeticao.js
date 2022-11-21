//For
//for (inicio;condição;interação)

// for(let i =10;i>=1;i--){
//     console.log(i)
// }

// for (let i =1;i<=10;i++){
//     if(i===5){
//         // break
//         continue
//     }
//     console.log(i)
// }

//WHILE (Enquanto)

// let interator = 1
// while(interator<=20){

//     console.log(interator)

// //incremento
// interator++
// }






//FOR OF
//ARRAY

// let number = ['Maria','Pedro','João','Jenifer','Luan']
//num = numbers (FOR OF)
//FOR OF (Valores do Arrey)

// for(num of number){
//     console.log(num)
// }

//FOR IN
// let animals = {
//     name: 'Leão',
//     weight:200,
//     age:4
// }

// for(item in animals){
//     //tipo 1 para capturar valores de objeto em um for in
//     console.log(animals["name"])
//     //tipo 2 para capturar todo o objeto
//     console.log(animals)
//     //tipo 3 mostra os valoresdentro das propriedades
//     console.log(animals[item])
//     //tipo 4 capturar valores individuais das propriedades de um objeto
//     console.log(animals.name)
// }

let arrayName = [
    'Jenifer',
    'Luan',
    'Regis',
    'Moacir'
]

for (item in arrayName){
    // console.log(arrayName)
    // console.log(arrayName[item])
    // console.log(arrayName[2]) //Mostrar diretamente um vetor
    console.log(item) // index dos vetores posições
}
