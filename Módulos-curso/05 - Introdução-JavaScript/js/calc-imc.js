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

    var pesoValido = validaPeso(peso);
    var alturaValida = validaAltura(altura);

    if (!pesoValido) {
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("invalid");
    }

    if (!alturaValida) {
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

function validaPeso(peso) {
    if (peso > 0 && peso <= 700) {
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {
    if (altura > 0 && altura <= 2.7) {
        return true;
    } else {
        return false;
    }
}