function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:
  
  return texto.split('').reverse().join('');

}
// texto.split convierte el string en un arreglo 
//le aplico .reverse
//le aplico .join (' ') para volverlo a texto
module.exports = invertirTexto;
