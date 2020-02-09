var angel = {
    nombre: 'Amgel',
    apellido: 'Pasillas',
    altura: 1.79,
    cantidadLibros: 111
}

var miguel = {
    nombre: 'Miguel',
    apellido: 'Pasillas',
    altura: 1.60,
    cantidadLibros: 1
}

var luis = {
    nombre: 'Luis',
    apellido: 'Pasillas',
    altura: 1.50,
    cantidadLibros: 5
}

var jorge = {
    nombre: 'Jorge',
    apellido: 'Pasillas',
    altura: 1.60,
    cantidadLibros: 6
}

var ivan = {
    nombre: 'Ivan',
    apellido: 'Pasillas',
    altura: 1.59,
    cantidadLibros: 12
}

var personas = [angel, miguel, luis, jorge, ivan];

//const esAlta = persona => persona.altura >= 1.6;
const esAlta = ({ altura }) => altura >= 1.6;

//const esBaja = persona => !esAlta(persona);
const esBaja = ({ altura }) => !esAlta({ altura });

var personasAltas = personas.filter(esAlta);
// var personasAltas = personas.filter(function(persona) {
//     return persona.altura >= 1.6;
// });

var personasBajas = personas.filter(esBaja);
// var personasBajas = personas.filter(function(persona) {
//     return persona.altura < 1.6;
// });


console.log(personasAltas);
console.log(personasBajas);

// const pasarAlturaACms = persona => {
//     return {
//         ...persona,
//         altura: persona.altura * 100
//     }
// }
const pasarAlturaACms = persona => ({
    ...persona,
    altura: persona.altura * 100
})

var personasCms = personas.map(pasarAlturaACms);

console.log(personasCms);

//const reducer = (acum, persona) => acum + persona.cantidadLibros;
const reducer = (acum, { cantidadLibros }) => acum + cantidadLibros;

var cantidadTotalLibros = personas.reduce(reducer, 0);

console.log(`En total todos tienen ${cantidadTotalLibros} libros.`);