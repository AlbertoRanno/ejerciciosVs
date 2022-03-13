//constructor de objetos: forma dinámica cuando voy a necesitar crear varios objetos.
//Por convención el nombre de esta función empieza con mayúscula.
function Auto(
  marca,
  modelo,
  precio,
  km,
  color,
  cuotas,
  anio,
  patente,
  vendido
) {
  this.marca = marca;
  this.modelo = modelo;
  this.precio = precio;
  this.km = km;
  this.color = color;
  this.cuotas = cuotas;
  this.anio = anio;
  this.patente = patente;
  this.vendido = vendido;
}

//instancio cada auto. Para eso asigno a una variable cualquiera la palabra reservada "new"
let primerAuto = new Auto(
  "Ford",
  "Fiesta",
  150000,
  200,
  "Azul",
  12,
  2019,
  "APL123",
  false
);
//console.log (primerAuto);

let segundoAuto = new Auto(
  "Toyota",
  "Corolla",
  100000,
  0,
  "Blanco",
  14,
  2019,
  "JJK116",
  false
);
//console.log (segundoAuto);

//teniendo cada auto definido en un objeto, agrupo los objetos en un array,
//para tener definida en una sola variable, toda mi lista de autos con sus respectivas propiedades
let autos = [primerAuto, segundoAuto];
//console.log(autos);

//la exporto para que quede funcional para que se pueda compartir con los diferentes archivos
module.exports = autos;
