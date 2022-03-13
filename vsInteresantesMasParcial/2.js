// Entradas para el cine

/*Nos piden que escribamos la función asientosDisponibles(), que tome como parámetro un 
conjunto de asientos disponibles y el asiento que quiere ocupar la persona. Nuestra función deberá verificar
 si el asiento solicitado se encuentra disponible y devolverle un mensaje claro y prolijo al cliente como en los 
 ejemplos siguientes:
Ejemplo si se encuentra el asiento disponible
asientosDisponibles([15, 28, 44, 45, 70], 15);  
// El resultado debería ser:
"Felicitaciones, el asiento número 15 está disponible"
Ejemplo si no se encuentra el asiento disponible
asientosDisponibles([15, 28, 44, 45, 70], 50);  
// El resultado debería ser:
"Lo sentimos, el asiento número 50 está ocupado, pero aún quedan 5 asientos disponibles"*/

function asientosDisponibles(unArray, nro) {
  if (unArray.indexOf(nro) != -1) {
    return "Felicitaciones, el asiento número " + nro + " está disponible";
  } else {
    return (
      "Lo sentimos, el asiento número " +
      nro +
      " está ocupado, pero aún quedan " +
      unArray.length +
      " asientos disponibles"
    );
  }
}
console.log(asientosDisponibles([15, 28, 44, 45, 70], 15));
console.log(asientosDisponibles([15, 28, 44, 45, 70], 50));
console.log(asientosDisponibles([3, 15, 18, 25], 25));
console.log(asientosDisponibles([3, 15, 18, 25], 18));