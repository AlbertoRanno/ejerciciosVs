//Rest Parameter
//permite definir una funcion que acepte cualquier nro de argumentos. Ej.
//va como unico parametro, o a lo ultimo.
function sumar(...numeros) {
  return numeros.reduce(function (acumulador, elemento) {
    return acumulador + elemento;
  });
}
console.log(sumar(1, 2));
console.log(sumar(1, 5, 5, 5, 4, 8, 7, 2, 2));
