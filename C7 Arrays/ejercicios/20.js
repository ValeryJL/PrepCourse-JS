function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  var si = true;
  var primero = array[0]
  array.forEach(element => {
    if (element != primero)
      si = false;
  });
  return si;
}

module.exports = todosIguales;
