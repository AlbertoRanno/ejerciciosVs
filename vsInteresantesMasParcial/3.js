//Control de pasajeros

/* Un tren va desde terminal hasta terminal con algunas estaciones intermedias, y la empresa necesita saber cuantos
 pasajeros lleva luego de la parada en cada estación. Para ello nos contrataron a nosotros, quienes somos responsables
de generar un programa que lo resuelva.
Para ayudar a la empresa escribamos una función reporteDePasajeros(), la cual cuando reciba la cantidad de estaciones 
que avanzó el tren nos devuelva un reporte de la cantidad de cada una de las estaciones y la cantidad de pasajeros que
 lleva el tren. La empresa nos provee los siguientes datos:
El tren sale de la estación terminal siempre con 200 pasajeros.
En cada estación el tren sube 50 pasajeros y se bajan 30.
En la estación Florida (la estación número 5), como es una estación central es la única donde bajan 80 personas y
 suben 120.
Teniendo éstos datos ya podemos armar nuestro programa, del cual nos pasan los siguientes ejemplos:
 // Si ejecutara la función de ésta manera:
reporteDePasajeros(0);  
// La función me retornaría lo siguiente:
['En la estación 0 hay 200 pasajeros arriba del tren']
Otro ejemplo:
 // Si ejecutara la función de ésta manera:
reporteDePasajeros(3);  
// La función me retornaría lo siguiente:
['En la estación 0 hay 200 pasajeros arriba del tren', 'En la estación 1 hay 220 pasajeros arriba del tren', 'En la 
estación 2 hay 240 pasajeros arriba del tren', 'En la estación 3 hay 260 pasajeros arriba del tren']
Otro ejemplo:
  // Si ejecutara la función de ésta manera:
reporteDePasajeros(5);  
// La función me retornaría lo siguiente:
['En la estación 0 hay 200 pasajeros arriba del tren', 'En la estación 1 hay 220 pasajeros arriba del tren', 'En la 
estación 2 hay 240 pasajeros arriba del tren', 'En la estación 3 hay 260 pasajeros arriba del tren',
'En la estación 4 hay 280 pasajeros arriba del tren', 'En la estación 5 hay 320 pasajeros arriba del tren']
Dame una pista
Este ejercicio no pide que ejecutes la función ni que muestres nada por consola.*/

function reporteDePasajeros(cantEstaciones) {
  let unArray = [];
  let cantPasajeros = 200;
  for (let i = 0; i <= cantEstaciones; i++) {  // i representa cada estación, siendo i=0, la terminal desde donde parte
    if (i != 5 && i != 0) {                      // e i = 5, la estacion central Florida
      cantPasajeros = cantPasajeros + 50 - 30;
      unArray.push(
        "En la estación " +
          i +
          " hay " +
          cantPasajeros +
          " pasajeros arriba del tren"
      );
    } else if (i == 0) { // comparacion simple
      unArray.push(
        "En la estación " +
          i +
          " hay " +
          cantPasajeros +
          " pasajeros arriba del tren"
      );
    } else {  // i = 5 estacion central
      cantPasajeros = cantPasajeros + 120 - 80;
      unArray.push(
        "En la estación " +
          i +
          " hay " +
          cantPasajeros +
          " pasajeros arriba del tren"
      );
    }
  }

  return unArray;
}

console.log(reporteDePasajeros(7));