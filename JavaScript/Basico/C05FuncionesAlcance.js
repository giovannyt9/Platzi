var nombre5 = 'Angel';


////Alcance Global
// function imprimirEnMayusculas() {
//     nnombre5 = nombre5.toUpperCase();
//     console.log(nombre5);
// }

////Alcance Local
// function imprimirEnMayusculas(n) {
//     n = n.toUpperCase();
//     console.log(n);
// }

////Alcance Local 
function imprimirEnMayusculas(nombre5) {
    nombre5 = nombre5.toUpperCase();
    console.log(nombre5);
}



imprimirEnMayusculas(nombre5);