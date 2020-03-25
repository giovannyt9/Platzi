var sacha = {
  nombre: 'Sacha',
  apellido: 'Lifszyc',
  edad: 28
}

var dario = {
  nombre: 'Darío',
  apellido: 'Susnisky',
  edad: 27
}
//parametros
function cumpleanos(persona) {
  return {
    ...persona, // aqui se pasa el parametro
    edad: persona.edad + 1 // salida 
  }
}
/*Salida en la consola**/

//cumpleanos(sacha) sera igual a 29
// sacha es igual a 28