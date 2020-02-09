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
    altura: 1.65
}

var personas = [angel, miguel, luis];

for (var i = 0; i < personas.length; i++) {
    var persona = personas[i];
    console.log(`${persona.nombre} mide ${persona.altura}.`);
}