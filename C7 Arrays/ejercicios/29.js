function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el array es vacío o si no hay números faltantes.
  // Tu código:
  if (numeros.length === 0) {
    return null;
  }

  for (let i = 0; i < numeros.length - 1; i++) {
    if (numeros[i + 1] !== numeros[i+1]) {
      return numeros[i] + 1;
    }
  }

  return null
}    



/*Array vacío: Si el array está vacío, retornamos null.
Bucle for: Recorremos el array y verificamos si el número siguiente no es el número actual más uno. Si encontramos esta diferencia, retornamos el número faltante.
Si no hay números faltantes: Si recorremos todo el array sin encontrar un número faltante, retornamos null.

module.exports = encontrarNumeroFaltante;*/