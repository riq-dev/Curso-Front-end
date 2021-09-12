// && e
// || ou
// Negativo

var idade = 9;
var menor10 = idade <= 10;
var maior65 = idade >= 65;
var gratuidade = menor10 || maior65;

console.log('Idade Atual:', idade);
console.log('Maior que 65:', maior65);
console.log('Menor que 10:', menor10);
console.log('Tem direito a gratuidade?', gratuidade);