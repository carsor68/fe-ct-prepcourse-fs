function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
     var i = 1;
    for(i=1; i<array.length; i++){
      if (array[i] !== array[0]){
   return false;   
      } 
    }
      return true;
 }

module.exports = todosIguales;
