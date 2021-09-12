// Quando a função esta dentro de um objeto, chamamos de método.
// O this é uma variável que muda com o contexto e é utilizado sempre no contexto do objeto.
function calcMedia() {
    return (this.notas[0] + this.notas[1]) / 2
}

var aluno = {
    nome: 'Wilton', notas: [8, 10],
    media: calcMedia
}

var aluno1 = {
    nome: 'Martins', notas: [6.5, 9.5],
    media: calcMedia
}

console.log(aluno.nome)
console.log(aluno.media())

console.log(aluno1.nome)
console.log(aluno1.media())

