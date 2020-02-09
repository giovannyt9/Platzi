function Persona(nombre, apellido, altura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
}

Persona.prototype.saludar = () => console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)

Persona.prototype.miAltura = () => console.log(`Soy ${this.nombre} ${this.apellido} con una estatura de ${this.altura} y soy ${this.altura >= 1.8 ? 'soy alto.' : 'soy bajo'}`);

var angel = new Persona('Angel', 'Pasillas', 1.8);
var erika = new Persona('Erika', 'Luna', 1.6);
var arturo = new Persona('Arturo', 'Martinez', 1.8);