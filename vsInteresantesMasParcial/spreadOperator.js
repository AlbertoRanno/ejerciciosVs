//el operador de propagacion ( ...variable) se puede
//utilizar sobre cualquier elemento iterable (arrays, objetos, funciones).
//se usa para copiar y mover datos de manera rapida
// en ARRAYS:
let colores = ["azul", "rojo", "rosa"];
let masColores = ["blanco", "amarillo"];
let todos = [...colores, ...masColores];
console.log(todos);
//en OBJETOS:
let auto = {
  marca: "ford",
  anio: 1965,
  modelo: "mustang",
};
let corredor = {
  nombre: "Ismael",
  ...auto,
};
console.log(corredor);
//en FUNCIONES:
let nros = [9, 8, 8, 8, 7, 5, 2, 3, 2, 1];
let devuelveElMenor = Math.min(...nros);
console.log(devuelveElMenor);

/*let suma = nros.reduce(function (acumulador, elemento) {
  return acumulador + elemento;
}, 10000000000);
console.log(suma)*/
