// Const: Ao ser declarada, significa que não pode se reatribuida, ela so pode receber o valor uma vez.
// Usando o push na constante, declarando um array ou objeto, podemos modificar o valor mas não podendo ser reatribuida.
// A diferença da constante para variável é que a variável pode ser reatribuida e a constante não.
// A diferença do let para a var se dar através do escopo, ou seja, é a aonde a variável existe e podemos acessar ela e aonde ela não existe.
// Funções tem um escopo mais fechado. Mesmo uma var, criada dentro do bloco de uma função só existirá ali dentro.
// O let e a const tem um escopo local, uma vez criada dentro do bloco, eles só existiram dentro desse bloco.
// Uma vez criada a var, ela é acessível em qualquer lugar, é o que chamamos de variável global. 

var numero1 = 4
let numero2 = 5
const numero3 = 6

console.log(numero1)
console.log(numero2)
console.log(numero3)