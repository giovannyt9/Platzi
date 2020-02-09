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


// imprimirEnMayusculas(angel2);
// imprimirEnMayusculas(dario2);
// imprimirEnMayusculas({ nombre: 'Pepito' });
//imprimirEnMayusculas(); ////Error

function imprimitNombreYEdad(persona) {
    var { nombre } = persona;
    var { edad } = persona;
    console.log(`Hola, me llamo ${nombre} y tengo ${edad} años.`);
}
imprimitNombreYEdad(angel2);
imprimitNombreYEdad(dario2);