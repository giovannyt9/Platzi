 //declarando objeto
 sacha = {
  nombre: 'Sacha',
  apellido: 'Lifszyc',
  edad: 28
}

var dario = {
  nombre: 'Darío',
  apellido: 'Susnisky',
  edad: 27
}
// 
function imprimirNombreEnMayusculas({ nombre , edad, apellido }) {
  console.log(nombre.toUpperCase(), edad)
}

// function imprimirNombreEnMayusculas(persona) {
//   console.log(persona.edad)
// }
imprimirNombreEnMayusculas(sacha)
imprimirNombreEnMayusculas(dario)
// imprimirNombreEnMayusculas({ nombre: 'Pepito' })
imprimirNombreEnMayusculas({ apellido: 'Gomez' })


/*********************************** */

 var objeto = {
  string: 'Hola soy una cadena de texto',
  int: 123,
  boolTrue: true,
  boolFalse: false,
  sumar: 5 + 5,
  minuscula: 'TEXTO'.toLowerCase()
}


/******************************************* */
var personas = {
  nombre: ['Bob', 'Smith'],
  edad: 32,
  genero: 'masculino',
  intereses: ['música', 'esquí'],
  bio: function () {
    console.log(this.nombre[0] + '' + this.nombre[1] + ' tiene ' + this.edad + ' años. Le gusta ' + this.intereses[0] + ' y ' + this.intereses[1] + '.');
  },
  saludo: function () {
    alert('Hola, Soy ' + this.nombre[0] + '. ');
  }
};