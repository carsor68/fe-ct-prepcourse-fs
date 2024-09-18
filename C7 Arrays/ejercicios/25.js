function contarParesConContinue(numeros) {
  // La función recibe un array de numeros por argumento.
  // Devuelve la cantidad de números pares que hay en el array.
  // Evita los impares utilizando continue.
  // Tu código:

  var array = [];
  let contador = 0;
  let i = 0;
  while (i < numeros.length) {
        if(numeros[i]  % 2 !== 0){
          i++;
          continue;
        } 
        contador++;
        i++;
      }
        return contador;
    
  }
      
      



module.exports = contarParesConContinue;
