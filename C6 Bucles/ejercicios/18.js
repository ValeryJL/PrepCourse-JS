function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  if (a < b) {
    var may = b;
    var men = a;
  }
  else {
    var may = a;
    var men = b;
  }
  var res = 1;
  for (var i = men; i <= may; i++) {
    res *= i;
  }
  return res === 0 ? 0 : res;
}

module.exports = productoEntreNúmeros;