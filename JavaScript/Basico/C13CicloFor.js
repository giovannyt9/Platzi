var angel = {
    nombre: 'Angel',
    apellido: 'Pasillas',
    edad: 24,
    peso: 75
}


console.log(`Al inicio del año ${angel.nombre} pesa ${angel.peso}kg.`);

const INCREMENTO_PESO = 0.2;
const DIAS_DEL_ANO = 365;

const aumentarPeso = persona => persona.peso += INCREMENTO_PESO;
const adelgazar = persona => persona.peso -= INCREMENTO_PESO;

for (var i = 1; i <= DIAS_DEL_ANO; i++) {
    var random = Math.random();
    if (random < 0.25) {
        aumentarPeso(angel);
    } else if (random < 0.5) {
        adelgazar(angel);
    }
}

console.log(`AL final del año ${angel.nombre} pesa ${angel.peso.toFixed(1)}kg.`);

const numMax = 10
const numMin = 1

//Número aleatorio: Con parametros
const numRandomParams = (numMax, numMin) => Math.round(Math.random() * (numMax - numMin) + numMin)
    //Número aleatorio: Sin parametros
const numRandom = () => Math.round(Math.random() * (numMax - numMin) + numMin)

console.log(numRandom()); // 8
console.log(numRandom()); // 5
console.log(numRandom()); // 1
console.log(numRandom()); // 10

console.log(numRandomParams(50, 60));
console.log(numRandomParams(98, 100));
console.log(numRandomParams(98, 100));
console.log(numRandomParams(98, 100));