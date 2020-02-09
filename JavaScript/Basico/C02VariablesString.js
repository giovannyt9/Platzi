///Declaración y Asignación de una variable
var nombre2 = 'Angel',
    apellido2 = 'Pasillas',
    numero2 = 20;

///Texto en mayusculas
var nombreEnMauysculas = nombre2.toUpperCase();
///Texto en minusculas
var apellidoEnMauysculas = apellido2.toLowerCase();

///primera letra de texto
var primeraLetraDeNombre = nombre2.charAt(0);

///Longitud de una cadena
var cantidadDeLetrasDelNombre = nombre2.length;

///Contatenacion de strings
//var nombreCompleto = nombre2 + ' ' + apellido2;
//var nombreCompleto2 = `${nombre2} ${apellido2}`;
var nombreCompleto3 = `${nombre2} ${apellido2.toUpperCase()}`;

//Dentro de un string
var str = nombre2.charAt(0) + nombre2.charAt(2);
var str2 = nombre2.substr(1, 2);

//Ultima letra el nombre
var ultimaLetraDelNombre = nombre2.charAt(nombre2.length - 1);