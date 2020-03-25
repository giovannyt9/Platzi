//los objetos en js son  clases
//definiento prototipo con una funcion
//se ejecuara cuando se cree una persona
//function retorna this al declarar el objeto con new

function Persona(name, apell, old, tall) {
// this hara referencia al objeto que se acaba de construir
// this.nombre <=> objeto.atributo
  this.nombre = name
  this.apellido = apell
  this.edad = old
  this.altura = tall
}
//Validando altura 
const ALTO = 1.80
  Persona.prototype.validaralto = function(){
    if (this.altura >=  ALTO) {
    console.log(`soy ${this.nombre} y mido ${this.altura}`)
    }
    else {
    console.log(`soy bajo`)
       }
  }


Persona.prototype.saludar = function () {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y mi edad es ${this.edad} años`)
}
//new crear nuevos obj dado un prototipo
var sacha = new Persona('Sacha', 'Lifszyc', 28, 1.90)
var erika = new Persona('Erika', 'Luna', 30, 1.50)
var arturo = new Persona('Arturo', 'Martinez', 22, 1.85)
var juan = new Persona('Juan', 'Jimenez', 50, 1.65)

sacha.saludar()
arturo.validaralto()