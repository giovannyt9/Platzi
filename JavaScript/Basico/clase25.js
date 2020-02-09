class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.altura = altura;
    }
    saludar() {
        console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
    }
    soyAlto() {
        return this.altura > 1.8
    }
}


class Desarrollador extends Persona {
    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura)
    }

    saludar() {
        console.log(`Hola, me llamo  ${this.nombre} ${this.apellido} y soy desarollador.`);
    }
}


// var angel = new Persona('Angel', 'Pasillas', 1.8);
// var erika = new Persona('Erika', 'Luna', 1.6);
// var arturo = new Persona('Arturo', 'Martinez', 1.8);