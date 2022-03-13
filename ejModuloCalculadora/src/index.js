const calculadora = require("./calculadora");
//const moment = require("moment");
const resta = require("./calculadora");

console.log(calculadora.suma(2, 2));
//console.log("Hola");
console.log(calculadora.resta(2, 2));
//console.log(moment("02/02/2022").format("DD-MM-YYYY"));
console.log(calculadora.multiplicar(2, 2));
console.log(calculadora.multiplicar(2, 0));
console.log(calculadora.multiplicar(0, 2));
console.log(calculadora.dividir(6, 2));
console.log(calculadora.dividir(0, 2));
console.log(calculadora.dividir(2, 0));

/*a. ¿Qué hubiese sucedido si, en vez de generar un archivo por cada operación
matemática, hubiésemos programado todo en un mismo archivo?
Ocupo menos espacio si mi app va a requerir usar las 4 operaciones, pero quizas ocupe mas, si
mi app usa solo una. Ni hablar, que si no llegara a usar ninguna, no deberia tener el modulo.

b. ¿Por qué el mejor camino es generar distintos archivos y luego requerirlos en uno solo?
por lo mencionado anteriormente. Tener lo mas posible fragmentado todo. hace que tenga disponible
para utilizar, solo lo especifico.

c. ¿Será esta metodología de trabajo una constante de aquí en adelante?
estimo que si.

Buenas preguntas para debatir con el resto de los estudiantes y junto con nuestro docente.*/
