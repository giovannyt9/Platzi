var angel = {
    nombre: 'Angel',
    apellido: 'Pasillas',
    edad: 28
};

var dario = {
    nombre: 'Dario',
    apellido: 'Susnisky',
    edad: 27
}

////Alcance Local 
// function imprimirEnMayusculas(persona) {
//     var nombre = persona.nombre.toUpperCase();
//     console.log(nombre);
// }

// function imprimirEnMayusculas(persona) {
//     console.log(npersona.nombre.toUpperCase());
// }

function imprimirEnMayusculas({ nombre }) {
    console.log(nombre.toUpperCase());
}

imprimirEnMayusculas(angel);
imprimirEnMayusculas(dario);
imprimirEnMayusculas({ nombre: 'Pepito' });
//imprimirEnMayusculas(); ////Error