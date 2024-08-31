function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'string' && array[i].length >= 5) {
      return array[i];
    }
  }
  return undefined;
 
}
//typeof se utiliza para  para determinar el tipo de dato de una expresión o variable. 
//Devuelve una cadena que indica el tipo de la variable o expresión evaluada.




module.exports = obtenerPrimerStringLargo;
