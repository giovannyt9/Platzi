var angel = {
    nombre: 'Angel',
    apellido: 'Pasillas',
    edad: 28,
    ingeniero: true,
    cocinero: false,
    cantante: false,
    dj: false,
    guitarrista: false,
    drone: true
}

function mayorDeEdad(persona) {
    if (persona.edad >= 18) {
        console.log(`Felicidades ${persona.nombre} eres mayor de edad, tienes ${persona.edad} años.`);
    } else {
        console.log(`Lo siento ${persona.nombre}, eres menor de edad, tienes ${persona.edad} años.`);
    }
}

function imprimirProfesores(persona) {
    console.log(`${persona.nombre} es: `);

    if (persona.ingeniero) {
        console.log('Ingeniero.');
    } else {
        console.log('NO ES INGENIERO.');
    }

    if (persona.cocinero) {
        console.log('Cocinero');
    } else {
        console.log('NO ES COCINERO.');
    }

    if (persona.cantante) {
        console.log('Cantante');
    } else {
        console.log('NO ES CANTANTE.');
    }

    if (persona.dj) {
        console.log('DJ');
    } else {
        console.log('NO ES DJ');
    }

    if (persona.drone) {
        console.log('Drone');
    } else {
        console.log('NO ES DRONE.');
    }
}

imprimirProfesores(angel);
mayorDeEdad(angel);