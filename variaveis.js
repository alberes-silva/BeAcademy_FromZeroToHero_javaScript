//Declarar

// var name
// let name2
// const name3 //falta valor para inicialização

// let name = "Luan"
// console.log(name)

// name = 32
// console.log(name)

// name = "Monteiro"
// console.log(name)

//Globais
//Hoisting -> var

console.log('Variável name existe aqui?',name)

{ //Escopo (Bloco de código)
    //Local
    var name = "Luan"
}

console.log('Variável name existe aqui?', name)

//Local

let name = "Luan"

console.log('Variável name existe aqui?', name)

{ //Scopo (Bloco de código)
    //Local
    name = "Jenifer"
    console.log('Variável name existe aqui?', name)
}

console.log('Variável name existe aqui?', name)
