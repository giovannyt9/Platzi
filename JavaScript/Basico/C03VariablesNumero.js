//Declaración y asignación de valor a una variable
var edad = 27;

///Incremento
//edad = edad + 1;
edad += 1;

var peso = 75;

///Decremento
//peso = peso - 2;
peso -= 2;

//Sumas y resta
var sandwich = 1;
peso += sandwich;
var jugarFutbol = 3;
peso -= jugarFutbol;

//Decimales
precioDeVino = 200.3;
var totalVino = Math.round(precioDeVino * 100 * 3) / 100;

//Limitar los decimales de un número
var totalVinoStr = totalVino.toFixed(3);

//Convertir de String a Float
var totalVino2 = parseFloat(totalVinoStr);

//Porciones
var pizza = 8;
var personas = 2;
var cantidaDePorcionesPorPersona = pizza / personas;