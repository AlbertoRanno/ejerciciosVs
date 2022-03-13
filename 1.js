/*function Auto (laMarca, elModelo) {
    this.marca = laMarca;
    this.modelo = elModelo; }

let nuevoAuto = new Auto ("Ford","Mustang")

    console.log(nuevoAuto)

    let futbolista1 = { nombre : "juan di biasi", estilo : "violento" , saludar : function () { return "hola soy " + this.nombre} } 
    let futbolista2 = { nombre : "roberto di biasi", estilo : "violento" , saludar : () => {  return "hola soy  "+ futbolista2.nombre}}  
    console.log(futbolista1.saludar());
    console.log(futbolista2.saludar());*/

    function Profesor(nombre, nacionalidad) {
        (this.nombre = nombre),
          (this.nacionalidad = nacionalidad),
          (this.saludar = function () {
            //   método saludar
            return 'Hola me llamo ' + this.nombre;
          });
      }
      
      let unProfesor = new Profesor('Wally', 'Colombiano');
      console.log(unProfesor);
      console.log('Creé un profesor que se llama: ' + unProfesor.nombre);
      console.log('El profesor es ' + unProfesor.nacionalidad);
      console.log(unProfesor.nombre + ' te saluda:');
      
      console.log(unProfesor.saludar());