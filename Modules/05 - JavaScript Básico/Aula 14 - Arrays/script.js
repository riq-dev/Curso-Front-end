var alunos = ["Martins", "Igor", "José", "Marcos", "Mariana", "Mariana"];
console.log(alunos.length);
console.log(alunos[0]);

var alunos2 = ["Martins", "Igor", "José", "Marcos", "Mariana", "ariana"];

// Irá mostrar o valor dos índices, que nesse exemplo, são nomes.
for (var i = 0; i < alunos2.length; i++) {
    console.log(alunos2[i]);
}

// Irá retornar o índice dos elementos.
for (var i in alunos2) {
    console.log(i);
}

// Irá mostrar o valor dos índices, que nesse exemplo, são nomes.
for (var i of alunos2) {
    console.log(i);
}

// Irá mostrar o valor dos índices, que nesse exemplo, são nomes.
alunos.forEach(function(elemento) {
    console.log(elemento);
})