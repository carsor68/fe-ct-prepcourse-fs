function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  
    // Verifica si el array está vacío
    if (array.length === 0) {
      return 0; // Retorna 0 si el array está vacío
    } else if (array.length ===1){
      return 0;
    }   
    var indiceMayor = 0; // Suponemos que el primer elemento es el mayor inicialmente
  
  for (var i = 1; i < array.length; i++) {
    if (array[i] > array[indiceMayor]) {
      indiceMayor = i; // Actualiza el índice del mayor si encontramos un número mayor
    }
  }
  
  return indiceMayor; // Devuelve el índice del número más grande
}
        

module.exports = encontrarIndiceMayor;
