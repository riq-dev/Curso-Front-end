// 1ª Forma de Declarar um objeto
var a = { nome: 'Igor', sobrenome: 'Oliveira' }

console.log(a)

// 2ª Forma de Declarar um objeto
function obj(n, s) {
    return { nome: n, sobrenome: s }
}
var a = obj('Wilton', 'Lira Martins')

console.log(a)

// 3ª Forma de Declarar um objeto
function obj(n, s) {
    this.nome = n
    this.sobrenome = s
}
var a = new obj('Wilton', 'Lira Martins')

console.log(a.nome)