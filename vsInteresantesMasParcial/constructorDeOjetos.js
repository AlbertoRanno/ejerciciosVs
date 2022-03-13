/* Ejemplo del tenista RELOADED */
 
// let tenista = {
//   nombre: 'Roger', // propiedad nombre
//   apellido: 'Federer', // propiedad nombre
//   saludar: function () {
//     // método saludar
//     return 'Hola me llamo ' + this.nombre;
//   },
// };
 
// Armo el molde para instanciar tenistas...
function Tenista(nombre, apellido, potencia, velocidad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.potencia = potencia;
    this.velocidad = velocidad;
    this.saludar = function () {
      return (
        'Hola! Soy alto tenista y me llamo: ' +
        this.nombre +
        ' ' +
        this.apellido +
        ' !!!'
      );
    };
    this.decirCaracteristicas = function () {
      return (
        'Mi potencia es de: ' +
        this.potencia +
        ' y mi velocidad es de: ' +
        this.velocidad +
        ' !!!'
      );
    };
    this.entrenar = function () {
      this.potencia++;
      this.velocidad = this.velocidad * 1.5;
    };
  }
   
  //creo tenistas
  let tenistaUno = new Tenista('Rogelio', 'Federer', 90, 90);
  let tenistaDos = new Tenista('Gaston', 'Gaudio', 50, 30);
  let tenistaTres = new Tenista('Guillermo', 'Vilas', 70, 75);
   
  console.log(tenistaUno);
  console.log(tenistaUno.saludar());
  console.log(tenistaUno.decirCaracteristicas());
   
  console.log('Entrenando a ' + tenistaUno.nombre);
  tenistaUno.entrenar();
  console.log(tenistaUno.decirCaracteristicas());

  