function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:

var acum = 1;
for (var i = a; i <= b; i++) {
  acum = acum * i;
} return Math.abs(acum); //este se coloca porque al correr el código da como expetativa productoEntreNúmeros of -5 and 5 is 0 (1 ms)
}



module.exports = productoEntreNúmeros;