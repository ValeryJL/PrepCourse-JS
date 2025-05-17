function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:
  var res = [];
  for (var i = 0; i <= 10; i++) {
    res[i] = i * 6;
  }
  return res;
}

module.exports = tablaDelSeis;
