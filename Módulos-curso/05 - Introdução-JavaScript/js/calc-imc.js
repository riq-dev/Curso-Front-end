var titulo = document.querySelector(".titulo");
titulo.textContent = "Nutricionista";
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
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }

}

function calculaImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);

    return imc.toFixed(1);
}