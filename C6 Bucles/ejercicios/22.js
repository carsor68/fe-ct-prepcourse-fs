function doWhile(num) {
  // Aumenta el valor de "num" recibido en 5 hasta un límite de 8 veces.
  // Retorna el valor final.
  // PISTA: Utiliza el bucle do-while.
  // Tu código:


  var i = 0; // Contador de iteraciones
  
  do {num = num + 5; //aumenta el valor de 5 en 5
        i++;      // Incrementa el contador
  } while (i < 8); // El bucle se ejecuta hasta que i sea 8

  return num;
}

console.log(doWhile(0));

module.exports = doWhile;