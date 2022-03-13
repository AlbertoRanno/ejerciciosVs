module.exports.suma = function (nro1, nro2) {
  return nro1 + nro2;
};
module.exports.resta = function (nro1, nro2) {
  return nro1 - nro2;
};
module.exports.multiplicar = function (nro1, nro2) {
  return nro1 * nro2;
};
module.exports.dividir = function (nro1, nro2) {
  if (nro2 == 0) {
    return "No se puede dividir por cero";
  } else {
    return nro1 / nro2;
  }
};
