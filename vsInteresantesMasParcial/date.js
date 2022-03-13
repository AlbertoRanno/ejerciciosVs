let fecha = new Date(); // date es un Objeto de Javascript, necesito almacenarlo en variable
//sin especificar devuelve la fecha del dia.

let dia = fecha.getDate(); 
let mes = fecha.getMonth(); // Enero = 0 por array
let anio = fecha.getFullYear();
let diaSemana = fecha.getDay(); // Domingo = 0 por convencion

console.log("Día: " + fecha.getDate());
console.log("Mes: " + fecha.getMonth());
console.log("Año: " + fecha.getFullYear());
console.log("DiaSemana: " + fecha.getDay());
console.log("Hoy es el día " + dia + " del mes " + (mes+1) + " del año " + anio);