var angel = {
    nombre: 'Amgel',
    apellido: 'Pasillas',
    altura: 1.79
}

var miguel = {
    nombre: 'Miguel',
    apellido: 'Pasillas',
    altura: 1.60
}

var luis = {
    nombre: 'Luis',
    apellido: 'Pasillas',
    altura: 1.50
}

var jorge = {
    nombre: 'Jorge',
    apellido: 'Pasillas',
    altura: 1.60
}

var ivan = {
    nombre: 'Ivan',
    apellido: 'Pasillas',
    altura: 1.59
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