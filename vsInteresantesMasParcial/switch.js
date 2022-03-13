let semaforo = "verde" ;
switch (semaforo) {
case "verde":
console.log ("puedo cruzar");
break;
case "amarillo":
console.log ("atención!");
break;
case "rojo":
console.log ("no cruces!");
break;
default: //(para el resto de los casos, por ejemplo, no hay ninguna luz):
console.log ("no anda el semáforo");
 //(opcional);
}

/*Obs! si el código a ejecutar es igual para 2 condiciones: 
case “amarillo”
(el break es opcional)
case “rojo”
console.log. (“presta atención”)
break;*/