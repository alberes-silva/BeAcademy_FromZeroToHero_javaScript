//Type Conversion

//Convertendo String para número e número para string

console.log(Number('9')+24);
console.log(String(9) + ' Converteu diacho!!')

//Contar Caracteres

let oneWord = "Moacir"
console.log(oneWord.length);

//Maiúscula e Minúscula
let phrase = "Olha o bonde do PayLivre euaaaauee"
console.log(phrase.toUpperCase());
console.log(phrase.toLowerCase());

//Convertendo para Inteiro
let decimalNumber = 32.8
console.log(parseInt(decimalNumber));

//Convertendo para Decimal
let integerNumber = 24
console.log(parseFloat(integerNumber));

//Trabalhar com casas decimais, números depois da vírgula
let niceNumber = 24.9856825475624635132355
console.log(niceNumber.toFixed(4));
console.log(niceNumber.toFixed(4).replace('.',','));

//Presisão Numérica
let otherNumber = 129/32
console.log(Number(otherNumber.toPrecision()));