"use strict";
var car;
function createCar() {
    /*crear Coche
  */
    var matricula = document.getElementById("plate").value.toString();
    var marca = document.getElementById("brand").value.toString();
    var colores = document.getElementById("color").value.toString();
    /* Views
  */
    var inter = document.createElement('div');
    car = new Car(matricula, colores, marca);
    var vista = document.getElementById('vista');
    inter.innerHTML = '<div class="card tex-center mb-4"><div class="card-body"><strong>Car :</strong></br><strong>Car Plate  </strong> : ' + car.plate + '<strong> Car Color  </strong> : ' + car.color + '<strong> Car Brand  </strong> : ' + car.brand + ' </br><strong> WHEELS: </br></strong> ' + JSON.stringify(car.wheels) + '</div> </div>';
    vista.appendChild(inter);
    /*displays del Formulario cars
    */
    var vcar = document.getElementById("fo").style.display = 'none';
    var vruedas = document.getElementById("boton").style.display = 'block';
}
function AddRuedas() {
    /*displays del Formulario wells
      */
    var vcar = document.getElementById("fo").style.display = 'block';
    var vruedas = document.getElementById("boton").style.display = 'none';
    var wellh = document.getElementsByClassName("caradd");
    for (var x = 0; x < wellh.length; x++) {
        var brand = document.getElementById("plateWell" + x).value;
        var diameter = document.getElementById("diameterW" + x).value;
        car.wheels[x];
        car.addWheel(car.wheels[x]);
        var inter = document.createElement('div');
        var vista = document.getElementById('vistaRuedas');
        inter.innerHTML = '<div class="card tex-center mb-4"><div class="card-body"><strong> WHEELS: </br></strong> ' + JSON.stringify(car.wheels) + '</div> </div>';
        vista.appendChild(inter);
    }
    /* for (let j = 0; j <=car.wheels.length;j++){
      
     car.addWheel(car.wheels[x]);
     
   
      
   }*/
}
