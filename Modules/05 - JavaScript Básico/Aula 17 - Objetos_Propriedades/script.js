// Exemplo 01
var aluno1 = {nome: 'Wilton', nota: 7.5}

console.log(aluno1.nota)

// Exemplo 02
var aluno2 = {nome: 'Wilton', nota: 7.5}

console.log(aluno2['nome'])

// Exemplo 03
var aluno3 = {nome: 'Wilton', notas: [7.5, 5.0]}

console.log(aluno3['notas'][1])

//Exemplo 04: Adicionando Propriedades
var aluno4 = {nome: 'Wilton', notas: [7.5, 5.0]}
aluno4.matricula = 12345
console.log(aluno4)

//Exemplo 05: Outra forma de adicionando propriedades
var aluno5 = {nome: 'Wilton', notas: [7.5, 5.0]}
aluno5.matricula = 12345
aluno5['sobrenome'] = 'Martins'

console.log(aluno5)

//Exemplo 06: Outra forma de adicionando propriedades
var aluno6 = {nome: 'Wilton', notas: [7.5, 5.0]}
var novaProp = 'lastname'
aluno6.matricula = 12345
aluno6[novaProp] = 'Martins'

console.log(aluno6)

//Exemplo 07: Outra forma de criar objeto
var aluno7 = new Object()
aluno7.nome = 'Wilton'
aluno7.notas = [8, 9]

console.log(aluno7)
