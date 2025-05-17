function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  const mesesBuscados = ["Enero", "Marzo", "Noviembre"];
  const encontrados = [];

  array.forEach(mes => {
    if (mesesBuscados.includes(mes)) {
      encontrados.push(mes);
    }
  });

  // Verifico que estén todos los meses buscados
  if (mesesBuscados.every(mes => encontrados.includes(mes))) {
    return encontrados;
  } else {
    return "No se encontraron los meses pedidos";
  }
}

module.exports = mesesDelAño;
