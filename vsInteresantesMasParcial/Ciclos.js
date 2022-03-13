//función imprimirAzul, 
//que toma como parámetro un valor numérico X e imprima "Azul" X cantidad de veces
function imprimirAzul(x) {
    for (let i = 0; i < x ; i++) {
        console.log('Azul');
    }
}
console.log(imprimirAzul(6))



function gananciaTotal(unPeriodo) {
    let sumatoria = 0;
    for (let i = 0; i < unPeriodo.length; i++) {
     
        sumatoria = sumatoria + unPeriodo[i];
    }
    return sumatoria;
}


function cantidadDeMesesConGanancia(unPeriodo) {
    let cantidad = 0;
    for (let i = 0; i < unPeriodo.length;i++) {
      if (unPeriodo[i]>0) {
         cantidad = cantidad +1
      }
    }
    return cantidad;
  }
  console.log(cantidadDeMesesConGanancia([23,0,23,-2]))

  function naipes(palo) {
    let maso = [];
    for (let i = 1; i <= 12; i++) {
        
       if (i!=8 && i!=9) {
         maso.push(i + " de " + palo)
       }
    }return maso;
}

console.log(naipes("oros"))