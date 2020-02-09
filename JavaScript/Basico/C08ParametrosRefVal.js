var angel2 = {
    nombre: 'Angel',
    apellido: 'Pasillas',
    edad: 28
};

var dario2 = {
    nombre: 'Dario',
    apellido: 'Susnisky',
    edad: 27
}

////Alcance Local 
function imprimirEnMayusculas(persona) {
    //var nombre = persona.nombre
    var { nombre } = persona;
    console.log(nombre.toUpperCase());
}


imprimirEnMayusculas(angel2);
imprimirEnMayusculas(dario2);

//valor se ve afectado
// function cumpleanos(persona) {
//     persona.edad += 1;
// }

//valor no se ve afectado
// function cumpleanos(edad) {
//     edad += 1;
// }

function cumpleanos(persona) {
    return {
        ...persona,
        edad: persona.edad + 1
    }
}