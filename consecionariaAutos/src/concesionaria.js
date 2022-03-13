let autos = require("./autos");

let concesionaria = {
  autos: autos,

  buscarAuto: function (patente) {
    let autoFiltrado = autos.filter(function (automovil) {
      return automovil.patente == patente;
    });
    if (autoFiltrado.length == 1) {
      return autoFiltrado[0];
    } else {
      return null;
    }
  },
  venderAuto: function (patente) {
    return (this.buscarAuto(patente).vendido = true);
  },
  autosParaLaVenta: function () {
    let autosAVender = autos.filter(function (noVendidos) {
      return noVendidos.vendido == false;
    });
    return autosAVender;
  },
  autosNuevos: function (autosNuevos) {
    let autos0km = this.autosParaLaVenta().filter(function (kms) {
      return kms.km < 100;
    });
    return autos0km;
  },
  listaDeVentas: function () {
    let listaPrecios = [];
    let autosVendidos = autos.filter(function (vendidos) {
      return vendidos.vendido == true;
    });
    //return autosVendidos.forEach(autosVendidos => {console.log(autosVendidos.precio)});
    for (let i = 0; i < autosVendidos.length; i++) {
      listaPrecios.push(autosVendidos[i].precio);
    }
    return listaPrecios;
  },
  totalDeVentas: function () {
    let totalVentas = this.listaDeVentas().reduce(function (
      acumulador,
      elemento
    ) {
      return acumulador + elemento;
    },
    0);
    return totalVentas;
  },
  puedeComprar: function (auto, persona) {
    if (
      auto.precio <= persona.capacidadDePagoTotal &&
      auto.precio / auto.cuotas <= persona.capacidadDePagoEnCuotas
    ) {
      return true;
    } else {
      return false;
    }
  },
  autosQuePuedeComprar: function (persona) {
    let autosDispo = this.autosParaLaVenta();
    let autosAlAlcance = [];
    for (let i = 0; i < autosDispo.length; i++) {
      if (this.puedeComprar(autosDispo[i], persona) == true) {
        autosAlAlcance.push(autosDispo[i]);
      }
    }
    return autosAlAlcance;
  },
};

//console.log(concesionaria);
//console.log(concesionaria.buscarAuto("APL123"));
//console.log(concesionaria.buscarAuto("JJK116"));
//console.log(concesionaria.buscarAuto("ADR116"));
//concesionaria.venderAuto("APL123");
//concesionaria.venderAuto("JJK116");
//console.log(concesionaria.autos);
//console.log(concesionaria.autosParaLaVenta());
//console.log(concesionaria.autosNuevos());
//console.log(concesionaria.listaDeVentas());
//console.log(concesionaria.totalDeVentas());
/*console.log(
  concesionaria.puedeComprar(
    {
      marca: "Ford",
      modelo: "Fiesta",
      precio: 150000,
      km: 200,
      color: "Azul",
      cuotas: 12,
      anio: 2019,
      patente: "APL123",
      vendido: false,
    },
    {
      nombre: "Juan",
      capacidadDePagoEnCuotas: 20000,
      capacidadDePagoTotal: 100000,
    }
  )
);*/
console.log(
  concesionaria.autosQuePuedeComprar({
    nombre: "Juan",
    capacidadDePagoEnCuotas: 20000,
    capacidadDePagoTotal: 100000,
  })
);
