var angel = {
    nombre: 'Angel',
    apellido: 'Pasillas',
    edad: 24,
    peso: 75
}


console.log(`Al inicio del año ${angel.nombre} pesa ${angel.peso}kg.`);

const INCREMENTO_PESO = 0.2;
const DIAS_DEL_ANO = 365;
const META_PESO = angel.peso - 3;
var dias = 0;

const aumentarPeso = persona => persona.peso += INCREMENTO_PESO;
const adelgazar = persona => persona.peso -= INCREMENTO_PESO;
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4

while (angel.peso > META_PESO) {
    //debugger
    if (comeMucho()) {
        aumentarPeso(angel);
    }
    if (realizaDeporte()) {
        adelgazar(angel);
    }
    dias += 1;
}

console.log(`Pasaron ${dias} días hasta que ${angel.nombre} adelgazo.`);