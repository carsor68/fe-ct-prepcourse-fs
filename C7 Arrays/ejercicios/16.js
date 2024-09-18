function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:



// Creamos un nuevo arreglo para almacenar los resultados.
  let resultado = [];
   // Iteramos sobre cada elemento del arreglo.
  for (let i = 0; i < array.length; i++) {   // Multiplicamos cada elemento por su índice y lo almacenamos en el nuevo arreglo.
    resultado.push(array[i] * i);
            
    }  return resultado; // Devolvemos el nuevo arreglo con los resultados.
 }

module.exports = multiplicarElementosPorIndice;
