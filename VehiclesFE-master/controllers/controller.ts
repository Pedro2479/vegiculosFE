let car:Car;


function createCar() {


 
 
  /*crear Coche
*/
    let matricula= (<HTMLInputElement>document.getElementById("plate")).value.toString();
    let marca= (<HTMLInputElement>document.getElementById("brand")).value.toString();
    let colores= (<HTMLInputElement>document.getElementById("color")).value.toString();
 
  /* Views
*/
    const inter = document.createElement('div');
    car = new Car(matricula, colores, marca);
    

    let vista=(<HTMLElement>document.getElementById('vista'));
    inter.innerHTML='<div class="card tex-center mb-4"><div class="card-body"><strong>Car :</strong></br><strong>Car Plate  </strong> : ' +car.plate+ '<strong> Car Color  </strong> : ' +car.color +  '<strong> Car Brand  </strong> : ' + car.brand+  ' </br><strong> WHEELS: </br></strong> ' + JSON.stringify(car.wheels)+'</div> </div>'
 

    vista.appendChild(inter);
  


  
    
  /*displays del Formulario cars
  */
   let vcar= (<HTMLInputElement>document.getElementById("fo")).style.display = 'none';
   let vruedas= (<HTMLInputElement>document.getElementById("boton")).style.display = 'block';
  
  
}
 

function  AddRuedas(){
  
/*displays del Formulario wells
  */
  
 let vcar= (<HTMLInputElement>document.getElementById("fo")).style.display = 'block';
   let vruedas= (<HTMLInputElement>document.getElementById("boton")).style.display = 'none';


   let wellh= document.getElementsByClassName("caradd");
  
   for(let x=0;x <wellh.length;x++){
 
  
    let brand=(<HTMLInputElement>document.getElementById("plateWell" +x)).value;
    let diameter= (<HTMLInputElement>document.getElementById("diameterW" +x)).value;
  
      car.wheels[x];
    
 

    car.addWheel(car.wheels[x]);
    
    const inter = document.createElement('div');
    
    

    let vista=(<HTMLElement>document.getElementById('vistaRuedas'));
    inter.innerHTML='<div class="card tex-center mb-4"><div class="card-body"><strong> WHEELS: </br></strong> ' + JSON.stringify(car.wheels)+'</div> </div>'
 

    vista.appendChild(inter);
    
   }
 
 /* for (let j = 0; j <=car.wheels.length;j++){
   
  car.addWheel(car.wheels[x]);
  

   
}*/
   
}

