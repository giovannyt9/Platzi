class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.altura = altura;
    }
    saludar(fn) {
        // var nombre = this.nombre
        // var apellido = this.apellido
        var { nombre, apellido } = this
        console.log(`Hola me llamo ${nombre} ${apellido}`);
        if (fn) {
            fn(nombre, apellido)
        }
    }
    soyAlto() {
        return this.altura > 1.8
    }
}


class Desarrollador extends Persona {
    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura)
    }

    saludar(fn) {
        var { nombre, apellido } = this
        console.log(`Hola, me llamo  ${nombre} ${apellido} y soy desarollador.`);
        if (fn) {
            fn(nombre, apellido, true)
        }
    }
}

function respoderSaludo(nombre, apellido, esDev) {
    console.log(`Buen día ${nombre} ${apellido}`);
    if (esDev) {
        console.log(`Ah mirá, no sabía que eras desarrollador/a`);
    }
}


var angel = new Persona('Angel', 'Pasillas', 1.8);
var erika = new Persona('Erika', 'Luna', 1.6);
var arturo = new Desarrollador('Arturo', 'Martinez', 1.8);

angel.saludar()
erika.saludar(respoderSaludo)
arturo.saludar(respoderSaludo)