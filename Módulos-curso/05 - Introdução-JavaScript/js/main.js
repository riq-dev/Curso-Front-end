var titulo = document.querySelector(".titulo");
titulo.textContent = "Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");

var pesoValido = true;
var alturaValida = true;

if (peso <= 0 || peso >= 700) {
    console.log("Peso inválido");
    var pesoValido = false;
    tdImc.textContent = "Peso inválido";
}

if (altura <= 0 || altura > 2.72) {
    console.log("Altura inválido");
    var pesoValido = false;
    tdImc.textContent = "Altura inválida";
}

if (pesoValido && alturaValida) {
    var imc = peso / (altura * altura);
    tdImc.textContent = imc;
}