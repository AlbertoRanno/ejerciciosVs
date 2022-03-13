//Escribí una función factorial, la misma debe recibir un número y calcular el factorial del mismo.
//El factorial de un número n es el resultado de multiplicar todos los números enteros positivos
//menores o iguales que n.

function factorial(n) {
  let factor = 1;
  for (let i = 0; i <= n; i++) {
    if (n - i >= 1) {
      factor = factor * (n - i);
    }
  }
  return factor;
}

console.log(factorial(0));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));

/*Necesitamos una función productoria que reciba un array de números y devuelva su productoria. La productoria 
es el resultado de multiplicar todos sus elementos entre ellos.
Por ejemplo, productoria([1, 4, 7]) debe devolver 28, que es 1 * 4 * 7.*/

function productoria(unArray) {
  let prod = 1;
  for (let i = 0; i < unArray.length; i++) {
    prod = prod * unArray[i];
  }
  return prod;
}

console.log(productoria([1, 4, 7]));

/* Los árboles utópicos crecen de una forma particular, en dos ciclos:
Cada primavera duplican su tamaño
Cada verano crecen un metro
Si Laura planta un árbol utópico de un metro, al fin del otoño, ¿cuánto medirá de alto después de N ciclos?
Algunos ejemplos:
Si N = 0, su altura será 1 metro (no creció nada)
Si N = 1, su altura será de 2 metros (duplicó su altura en primavera)
Si N = 2, su altura será de 3 metros (creció un metro más en verano)
Si N = 3, su altura será de 6 metros (duplicó su altura en la siguiente primavera)
y así ...
Escribí la función alturaArbolUtopico, que tome una cantidad de ciclos de crecimiento, y 
devuelva la altura resultante del árbol de Laura.*/

function alturaArbolUtopico(n) {
  let altura = 1;
  for (let ciclo = 1; ciclo <= n; ciclo++) {
    if (ciclo % 2 != 0 && ciclo > 0) {
      altura = altura * 2;
    } else {
      altura = altura + 1;
    }
  }
  return altura;
}
console.log(alturaArbolUtopico(0));
console.log(alturaArbolUtopico(1));
console.log(alturaArbolUtopico(2));
console.log(alturaArbolUtopico(3));
console.log(alturaArbolUtopico(4));

/*Necesitamos una función masMenos que reciba un array y devuelva otro con los siguientes tres números:
En la primera posición, la fracción de números que son positivos
En la segunda posición, la fracción de números que son cero
En la última posición, la fracción de números que son negativos
Por ejemplo, masMenos([1, 2, 0, -1]) debería devolver [0.5, 0.25, 0.25], dado que hay 50% de positivos, 
25% de ceros, y 25% de negativos*/

function masMenos(unArray) {
  let otroArray0 = 0;
  let otroArray1 = 0;
  let otroArray2 = 0;
  let total = unArray.length;
  let otroArray = [0, 0, 0];
  for (let i = 0; i < unArray.length; i++) {
    if (unArray[i] > 0) {
      otroArray0++;
    } else if (unArray[i] == 0) {
      otroArray1++;
    } else {
      otroArray2++;
    }
  }
  otroArray[0] = otroArray0 / total;
  otroArray[1] = otroArray1 / total;
  otroArray[2] = otroArray2 / total;
  return otroArray;
}

//Acumulador, con nros. Da nro.

function cuantoTengo(cantidadDeMonedas) {
  let acumulador = 0;
  for (let i = 0; i < cantidadDeMonedas; i++) {
    acumulador = acumulador + 0.25;
  }
  return acumulador;
}
console.log(cuantoTengo(5));

//Acumulador con strings. Da Frase (concatenacion])

function armaFrase(unArray) {
  let acumulador = "";
  for (let i = 0; i < unArray.length; i++) {
    acumulador = acumulador + unArray[i];
  }
  return acumulador;
}
console.log(armaFrase(["Hola ", "mis ", 2, " amores"]));

//Contador de "Nachos". con Arrays. Da Nro.

function contadorNachos(unArray) {
  let acumuladorNachos = 0;
  for (let i = 0; i < unArray.length; i++) {
    if (unArray[i] == "Nacho") {
      acumuladorNachos++;
    }
  }
  return acumuladorNachos;
}

console.log(contadorNachos(["Nacho", "Pepe", "Nacho"]));

//con Arrays. Da Arrays

function ganancias(unArray) {
  let acumuladorGanancias = [];
  for (let i = 0; i < unArray.length; i++) {
    if (unArray[i] > 0) {
      acumuladorGanancias.push(unArray[i]);
    }
  }
  return acumuladorGanancias;
}

console.log(ganancias([23, 2, 0, -4, 10]));

/*Necesitamos una función masMenos que reciba un array y devuelva otro con los siguientes tres números:
En la primera posición, la fracción de números que son positivos
En la segunda posición, la fracción de números que son cero
En la última posición, la fracción de números que son negativos
Por ejemplo, masMenos([1, 2, 0, -1]) debería devolver [0.5, 0.25, 0.25], dado que hay 50% de positivos, 
25% de ceros, y 25% de negativos.*/

function masMenos(unArray) {
  let otroArray = [0, 0, 0];
  let positivos = 0;
  let ceros = 0;
  let negativos = 0;
  let totalDeNros = unArray.length;
  for (let i = 0; i < unArray.length; i++) {
    if (unArray[i] > 0) {
      positivos++;
    } else if (unArray[i] == 0) {
      ceros++;
    } else {
      negativos++;
    }
  }
  otroArray[0] = positivos / totalDeNros;
  otroArray[1] = ceros / totalDeNros;
  otroArray[2] = negativos / totalDeNros;
  return otroArray;
}

console.log(masMenos([1, 2, 0, -1]));
