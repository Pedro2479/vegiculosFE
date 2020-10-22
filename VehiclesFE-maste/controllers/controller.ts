let car: Car;
//const form = (<HTMLElement>document.getElementById('car-add'));

function createCar() {
  /*crear Coche
   */
  let matricula = <HTMLInputElement>document.getElementById("plate");
  let marca = <HTMLInputElement>document.getElementById("brand");
  let colores = <HTMLInputElement>document.getElementById("color");

  if (!validateCar() == true) {
    car = new Car(matricula.value, colores.value, marca.value);
    const inter = document.createElement("div");

    let vista = <HTMLElement>document.getElementById("vista");
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
    let vcar = ((<HTMLInputElement>(
      document.getElementById("fo")
    )).style.display = "none");
    let vruedas = ((<HTMLInputElement>(
      document.getElementById("ruedas")
    )).style.display = "block");
  }
}

function AddRuedas() {

  let wellh = (<HTMLInputElement>document.getElementById("caradd")).childNodes;
  let contador: number = 0;

  for (let x = 1; x <= 4; x++) {

    var diameter = document.getElementById("diameterW" + x) as HTMLFormElement;

    var brand = document.getElementById("plateWell" + x) as HTMLFormElement;

    if (validateWeels(diameter, brand, x)) {

      contador++;
    }

  }
  if (contador == 0) {
    for (let x = 1; x <= 4; x++) {

      var diameter = document.getElementById("diameterW" + x) as HTMLFormElement;
      var brand = document.getElementById("plateWell" + x) as HTMLFormElement;

      var wheels = new Wheel(diameter.value, brand.value);
      car.addWheel(wheels);

    }


    
    let whellcontador=0;
    let vicab="";
    let vista = <HTMLElement>document.getElementById("vistaRuedas");

    const vista2 = document.createElement('section'); 
   
    car.wheels.forEach(element => {

     whellcontador++;

  
   vicab = vicab+'<div><strong> WHEELS:"'+whellcontador+"</strong> </br> Brand : "+element.brand+"</br> "+" Diameter : "+element.diameter+'</div> &nbsp;';
  
     
  });
 
 
  
  let res= vista2.innerHTML =  '<div class="colorw2">'+vicab+'</div>' ;

  vista.appendChild(vista2);
   
  /*displays del Formulario wheels
     */

    let vcar = ((<HTMLInputElement>document.getElementById("fo")).style.display =
      "none");
    let vruedas = ((<HTMLInputElement>(
      document.getElementById("ruedas")
    )).style.display = "none");
  }
}

function validateCar() {
  let contador: number = 0;

  var valMatricula = <HTMLInputElement>document.getElementById("plate");
  var valBrand = <HTMLInputElement>document.getElementById("brand");
  var valColor = <HTMLInputElement>document.getElementById("color");

  var errorPlate: HTMLElement = <HTMLElement>(
    document.getElementById("errorMatricula")
  );
  var errorBrand: HTMLElement = <HTMLElement>(
    document.getElementById("errorBrand")
  );
  var errorColor: HTMLElement = <HTMLElement>(
    document.getElementById("errorColor")
  );

  valMatricula.classList.remove("is-invalid");

  if (valMatricula.value == "") {
    valMatricula.classList.add("is-invalid");
    errorPlate.textContent = "Plate is required";
    contador++;
  } else if (!validarMaricula(valMatricula.value)) {
    valMatricula.classList.add("is-invalid");
    errorPlate.textContent = "the registration does comply with the format";
    contador++;

  }

  if (valBrand.value == "") {
    valBrand.classList.add("is-invalid");
    errorBrand.textContent = "Brand is required";
    contador++;

  } else {
    valBrand.classList.remove("is-invalid");

  }
  if (valColor.value == "") {
    valColor.classList.add("is-invalid");
    errorColor.textContent = "Color is required";
    contador++;
  } else {
    valColor.classList.remove("is-invalid");

  }
  return contador;
}

function validarMaricula(plate: string): boolean {
  var regex = /[0-9]{4}[A-Z]{3}/g;
  return regex.test(plate) ? true : false;
}

/*-----------------------------------------------------------------------
------------------------------------------------------------------*/

/* VALIDACION DE LAS RUEDAS*/

/*DIAMETRO*/
function validateWeels(diameter: any, brand: any, id: number) {
  let contador: number = 0;

  var errorDiameter: HTMLElement = <HTMLElement>(
    document.getElementById('errorDiameter' + id)
  );

  if (diameter.value == "") {
    diameter.classList.add("is-invalid");
    errorDiameter.textContent = "diameter is required";

    contador++;
  } else if (
    parseFloat(diameter.value) <= 0.4 && parseFloat(diameter.value) > 2
  ) {
    diameter.classList.add("is-invalid");
    errorDiameter.textContent = "diameter less than 2";

    contador++;

  } else {
    diameter.classList.remove("is-invalid");

  }

  /*MARCA*/

  var errorPlate: HTMLElement = <HTMLElement>(
    document.getElementById('errorPlate' + id)
  );

  if (brand.value == "") {
    brand.classList.add("is-invalid");
    errorPlate.textContent = "Plate is required";

    contador++;
  } else {
    brand.classList.remove("is-invalid");
  }

  return contador;
}
