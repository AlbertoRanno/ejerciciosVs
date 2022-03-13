let fs = require("fs");

let datos = fs.readFileSync(__dirname + "/prueba.txt", "utf-8");

console.log(datos);

let heroes = require("./superheores");

console.log(heroes);

let series = require("./series");

console.log(series);
