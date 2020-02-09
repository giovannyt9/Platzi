function heredaDe(prototySon, prototyDad) {
    var noop = function() {}
    noop.prototype = prototyDad.prototype
    prototySon.prototype = new noop
    prototySon.prototype.constructor = prototySon
}

function Persona(nombre, apellido, altura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
}

Persona.prototype.saludarMal = () => console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)

Persona.prototype.miAlturaMal = () => console.log(`Soy ${this.nombre} ${this.apellido} con una estatura de ${this.altura} y soy ${this.altura >= 1.8 ? 'soy alto.' : 'soy bajo'}`);

Persona.prototype.soyAlto = function() {
    return this.altura > 1.8
}

Persona.prototype.saludar = function() {
    console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
}

function Desarrollador(nombre, apellido) {
    this.nombre = nombre
    this.apellido = apellido
}

heredaDe(Desarrollador, Persona)

Desarrollador.prototype.saludarChido = function() {
    console.log(`Hola, me llamo  ${this.nombre} ${this.apellido} y soy desarollador.`);
}


// var angel = new Persona('Angel', 'Pasillas', 1.8);
// var erika = new Persona('Erika', 'Luna', 1.6);
// var arturo = new Persona('Arturo', 'Martinez', 1.8);