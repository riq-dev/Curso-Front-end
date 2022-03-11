var titulo = document.querySelector(".titulo");
titulo.textContent = "Nutricionista";

var adicionar = document.querySelector("#adicionar-paciente");

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];
    var tdPeso = paciente.querySelector(".info-peso")
    var peso = tdPeso.textContent;
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    var tdImc = paciente.querySelector(".info-imc");
    var pesoValido = true;
    var alturaValida = true;

    if (peso <= 0 || peso >= 700) {
        var pesoValido = false;

    }
    if (altura < 0 || altura > 2.8) {
        var alturaValida = false;

    }
    if (pesoValido == false) {
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("invalid");
    }

    if (alturaValida == false) {
        tdImc.textContent = "Altura inválida";
        paciente.classList.add("invalid");
        if (pesoValido == false && alturaValida == false) {
            tdImc.textContent = "Peso e Altura inválida";
            paciente.classList.add("invalid");
        }
    }

    if (pesoValido && alturaValida) {
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(1);
    }

}

adicionar.addEventListener("click", function(e) {
    e.preventDefault();
    console.log("Olá, eu fui clicado!");
});