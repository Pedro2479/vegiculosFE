"use strict";
var car;
//const form = (<HTMLElement>document.getElementById('car-add'));
function createCar() {
    /*crear Coche
     */
    var matricula = document.getElementById("plate");
    var marca = document.getElementById("brand");
    var colores = document.getElementById("color");
    if (!validateCar() == true) {
        car = new Car(matricula.value, colores.value, marca.value);
        var inter = document.createElement("div");
        var vista = document.getElementById("vista");
        inter.innerHTML =
            '<div class="card tex-center mb-4 colorw"><div class="card-body"><strong>Car :</strong></br><strong>Car Plate  </strong> : ' +
                car.plate +
                "<strong> Car Color  </strong> : " +
                car.color +
                "<strong> Car Brand  </strong> : " +
                car.brand +
                " </br></div> </div>";
        vista.appendChild(inter);
        /*displays del Formulario cars
         */
        var vcar = ((document.getElementById("fo")).style.display = "none");
        var vruedas = ((document.getElementById("ruedas")).style.display = "block");
    }
}
function AddRuedas() {
    var wellh = document.getElementById("caradd").childNodes;
    var contador = 0;
    for (var x = 1; x <= 4; x++) {
        var diameter = document.getElementById("diameterW" + x);
        var brand = document.getElementById("plateWell" + x);
        if (validateWeels(diameter, brand, x)) {
            contador++;
        }
    }
    if (contador == 0) {
        for (var x = 1; x <= 4; x++) {
            var diameter = document.getElementById("diameterW" + x);
            var brand = document.getElementById("plateWell" + x);
            var wheels = new Wheel(diameter.value, brand.value);
            car.addWheel(wheels);
        }
        var whellcontador_1 = 0;
        var vicab_1 = "";
        var vista = document.getElementById("vistaRuedas");
        var vista2 = document.createElement('section');
        car.wheels.forEach(function (element) {
            whellcontador_1++;
            vicab_1 = vicab_1 + '<div><strong> WHEELS:"' + whellcontador_1 + "</strong> </br> Brand : " + element.brand + "</br> " + " Diameter : " + element.diameter + '</div> &nbsp;';
        });
        var res = vista2.innerHTML = '<div class="colorw2">' + vicab_1 + '</div>';
        vista.appendChild(vista2);
        /*displays del Formulario wheels
           */
        var vcar = (document.getElementById("fo").style.display =
            "none");
        var vruedas = ((document.getElementById("ruedas")).style.display = "none");
    }
}
function validateCar() {
    var contador = 0;
    var valMatricula = document.getElementById("plate");
    var valBrand = document.getElementById("brand");
    var valColor = document.getElementById("color");
    var errorPlate = (document.getElementById("errorMatricula"));
    var errorBrand = (document.getElementById("errorBrand"));
    var errorColor = (document.getElementById("errorColor"));
    valMatricula.classList.remove("is-invalid");
    if (valMatricula.value == "") {
        valMatricula.classList.add("is-invalid");
        errorPlate.textContent = "Plate is required";
        contador++;
    }
    else if (!validarMaricula(valMatricula.value)) {
        valMatricula.classList.add("is-invalid");
        errorPlate.textContent = "the registration does comply with the format";
        contador++;
    }
    if (valBrand.value == "") {
        valBrand.classList.add("is-invalid");
        errorBrand.textContent = "Brand is required";
        contador++;
    }
    else {
        valBrand.classList.remove("is-invalid");
    }
    if (valColor.value == "") {
        valColor.classList.add("is-invalid");
        errorColor.textContent = "Color is required";
        contador++;
    }
    else {
        valColor.classList.remove("is-invalid");
    }
    return contador;
}
function validarMaricula(plate) {
    var regex = /[0-9]{4}[A-Z]{3}/g;
    return regex.test(plate) ? true : false;
}
/*-----------------------------------------------------------------------
------------------------------------------------------------------*/
/* VALIDACION DE LAS RUEDAS*/
/*DIAMETRO*/
function validateWeels(diameter, brand, id) {
    var contador = 0;
    var errorDiameter = (document.getElementById('errorDiameter' + id));
    if (diameter.value == "") {
        diameter.classList.add("is-invalid");
        errorDiameter.textContent = "diameter is required";
        contador++;
    }
    else if (parseFloat(diameter.value) <= 0.4) {
        diameter.classList.add("is-invalid");
        errorDiameter.textContent = "diameter greater than 0.4";
        contador++;
    }
    else if (parseFloat(diameter.value) > 2) {
        diameter.classList.add("is-invalid");
        errorDiameter.textContent = "diameter less than 2";
        contador++;
    }
    else {
        diameter.classList.remove("is-invalid");
    }
    /*MARCA*/
    var errorPlate = (document.getElementById('errorPlate' + id));
    if (brand.value == "") {
        brand.classList.add("is-invalid");
        errorPlate.textContent = "Plate is required";
        contador++;
    }
    else {
        brand.classList.remove("is-invalid");
    }
    return contador;
}
