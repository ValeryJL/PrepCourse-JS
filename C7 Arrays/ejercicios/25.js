function contarParesConContinue(numeros) {
  // La función recibe un array de numeros por argumento.
  // Devuelve la cantidad de números pares que hay en el array.
  // Evita los impares utilizando continue.
  // Tu código:
  var cant = 0;
  numeros.forEach(element => {
    cant += element % 2 === 0 ? 1 : 0;
  });
  return cant;
}

module.exports = contarParesConContinue;
