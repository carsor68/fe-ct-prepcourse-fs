function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  var  pares = []
  for (var  i=0; i < array.length; i++){
    if (array[i] % 2 === 0){
      pares.push(array[i])
    };
    }
    return pares;
}


module.exports = filtrarNumerosPares;
/*En este código:

Creamos un nuevo arreglo pares donde almacenaremos los números pares.
Iteramos sobre cada elemento del array con un bucle for.
Verificamos si el número actual es par usando array[i] % 2 === 0.
Si es par, lo agregamos al arreglo pares con pares.push(array[i]).
Finalmente, devolvemos el arreglo pares con todos los números pares encontrados.*/
