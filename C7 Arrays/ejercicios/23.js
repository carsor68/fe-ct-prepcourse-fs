function breakStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un arreglo y retórnarlo.
  // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y retornar el string: "Se interrumpió la ejecución".
  // Tu código:
  var array = [];
  var i = 0;
  while (i < 10) {
    num = num +2
    if(num === i)break;
    array.push(num)
    i++;
  }
      if(i < 10) return "Se interrumpió la ejecución"
      return array;
  }
  
  


module.exports = breakStatement;
