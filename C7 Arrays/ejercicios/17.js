function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  return arrayOfNums.reduce((acc, n) => acc + n, 0);
}

module.exports = agregarNumeros;
