//Declarar
//Objetos

const human = {
    name : "Luan Monteiro",
    age: 30,
    weight: 90,
    isAthlete: true,
    walk: function walking() {
            console.log('Eu ando bastante!')
    }
} // Objeto

console.log({human})
console.log(human)
console.log(human.age)
console.log(human.name)
console.log(human.walk())

// Concatenar

console.log("O humano " + human.name + " tem a idade " + human.age + " anos")

// Interpolação

console.log(`O humano ${human.name} tem a idade ${human.age} anos`)


//Array
const animals = [
    "Elefante", //0
    "Gato", //1
    "Leão", //2
    "Cachorro", //3
    {//4
        name: "Moacir",
        age: 2,
        weight: 4
    }
]
console.log(animals)
console.log(animals.length)
console.log(animals[2])
console.log(animals[4])
console.log(animals[4].name)
console.log(animals[4].weight)

