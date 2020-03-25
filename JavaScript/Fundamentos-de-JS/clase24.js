//funcion que hereda de prototipo Desarrollador , Persona
function heredaDe(prototipoHijo, prototipoPadre) {
  //fn o noop se usa comunmente para definir una funcion vacia y anonima
  var fn = function () {}
  //para no pisar el prototype del prototipo padre pasar al obj fn.pro....
  fn.prototype = prototipoPadre.prototype
  prototipoHijo.prototype = new fn
  // linea para llamar al  contructor del prototipo hijo
  //si no se define llama al constructor del prototipo padre
  prototipoHijo.prototype.constructor = prototipoHijo
}
// Padre
function Persona(nombre, apellido, altura) {
  this.nombre = nombre
  this.apellido = apellido
  this.altura = altura
}

Persona.prototype.saludar = function () {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y mido ${this.altura} cm`)
}

Persona.prototype.soyAlto = function () {
  return this.altura > 1.8
}
//funcion que se ejecuaara cuando se creen nuevos devps
// Hijo
function Desarrollador(nombre, apellido) {
  this.nombre = nombre
  this.apellido = apellido
}

heredaDe(Desarrollador, Persona)
//Pisa la funcion anterior de saludar
Desarrollador.prototype.saludar = function () {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador/a`)
}

//Ejecutar
// var sacha = new Persona('Sacha', 'Lifszyc', 1.72)
//luego sacha.saludar() //mostrara console de Persona
//Ejecutar en consola
// var erika = new Desarrollador('Erika', 'Luna', 1.65)
//luego erika.saludar() //mostrara console de Desarrollador
// var arturo = new Persona('Arturo', 'Martinez', 1.89)
