// Instância é quando pegammos um modelo de objeto e transformamos ele em outro objeto diferente
/*
function criarAluno(nome, n1, n2) {
    return {
        nome: nome,
        nota1: n1,
        nota2: n2,
        media: function(){
            return (this.nota1 + this.nota2) / 2
        }
    }
}

var turma = [
    criarAluno('Wilton', 9, 6),
    criarAluno('Martins', 8, 10),
    criarAluno('César', 10, 9.5)
]

var aluno = turma[2]


for (var aluno of turma) {
    console.log(aluno)
}


turma.forEach(function(elemento){
    console.log(elemento)
})

*/

// Outra forma
function aluno(nome, n1, n2) {
    this.nome = nome
    this.nota1 = n1
    this.nota2 = n2
    this.media = function () {
        return (this.nota1 + this.nota2) / 2
    }
}
var a = new aluno('Wilton', 8, 7)
var b = new aluno('Martins', 10, 9.5)
console.log(a)