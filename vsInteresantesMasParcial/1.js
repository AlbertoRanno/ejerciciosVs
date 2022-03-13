//Sumatorias de bajo importe

/*Resulta que cuando hay que presentar ganancias mayores a $ 1.000 no se presentan junto con las rendiciones que 
veníamos haciendo, por lo cual vamos a necesitar darle una vuelta de tuerca mas a nuestra función de Sumatorias.
Escribí la función sumatoriaBajoImporte la cual recibiendo un array con importes nos devuelva el resultado final de la
 suma de los importes de todos los meses que tienen ganancia, a excepción de los que superen un importe de $ 1.000
Dame una pista
Nos piden que no contemplemos en nuestro estado contable los importes mayores a $ 1.000 ni los que no obtuvieron
 ganancias.*/

function sumatoriaBajoImporte(unArray) {
  let ganancias = 0;
  for (let i = 0; i < unArray.length; i++) {   // i representa el indice de cada elemento del array, como 
    if (unArray[i] <= 1000 && unArray[i] > 0) {
      ganancias = ganancias + unArray[i];
    }
  }
  return ganancias;
}


console.log(
  sumatoriaBajoImporte([
    300, 0, -250, -100, 0, 400, 600, 1200, 5000, 0, 1000, 1000,
  ])
);
