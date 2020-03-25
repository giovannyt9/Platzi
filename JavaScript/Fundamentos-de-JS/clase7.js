var persona1 = {
  nombre: 'Sacha',
  apellido: 'Lifszyc',
  edad: 28
}

var persona2 = {
  nombre: 'Katherine',
  apellido: 'Aguilera',
  edad: 27
}

/********DESTRUCTURAR OBJETOS*******/
function imprimirNombreYEdad(persona) {
  var { nombre, edad} = persona
  console.log(`Hola, me llamo ${nombre}  y tengo ${edad} años.`)
}

imprimirNombreYEdad(persona1)
imprimirNombreYEdad(persona2)


/****************OTRA FORMA DE DESTRUCTURAR OBJETOS**************************** */

var obj1 = {
  obj2: {
    nombre: 'victor',
    edad: 19
  }
}

function saludar(obj) {
  var { nombre, edad} = obj.obj2
  console.log(`Hola me llamo ${nombre} y tengo ${edad} años`)
}
saludar(obj1) // Salida ->  Hola me llamo victor y tengo 19 años