//sirve para extraer de manera abreviada datos de un array u objeto. Actualmente se usa mucho.
//NO modifica el objeto u arrays de origen, su unico objetivo es copiar los valores de una manera rapida

//obtencion de datos en ARRAYS SIN destruturing:
let colores = ["azul", "rojo", "rosa"];
//let azul = colores[0];  // la comento sino no me toma el destructuring. Pero asi es como
// tendria que definir cada variable. Y, a muchos elementos, tendriamos que crear muchas variables.

//CON destructuring:
let [azul, rojo, rosa] = colores; // notese que lo que comento entre [ son nombres de las
// variables], y no los strings. Defino todas las variables mas rapido. Estas pueden llevar cualquier nombre, importa su posicion

let otroEj = ["oro", "espada", "basto", "copa"];
//si quisiera algunos valores solamente, dejo UN ESPACIO EN BLANCO, para la posicion del elemento que no me interesa
let [, , , copa] = otroEj;

//obtencion de datos de OBJETOS SIN destruturing:
let auto = {
  marca: "ford",
  anio: 1965,
  modelo: "mustang",
};
//let marca = auto.marca;

//CON destructuring:
//let {marca,anio,modelo} = auto;
//si quisiera algunas propiedas solamente, solo paso las que quiero y listo
// let {marca,modelo} = auto;
// si tuviera que cambiar el nombre:
let { marca, anio: anioDeFabricacion, modelo } = auto;
