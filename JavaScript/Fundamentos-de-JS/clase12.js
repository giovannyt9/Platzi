var sacha = {
  nombre: 'Sacha',
  apellido: 'Lifszyc',
  edad: 28,
  ingeniero: false,
  cocinero: false,
  cantante: true,
  dj: false,
  guitarrista: false,
  drone: false
}

var juan = {
  nombre: 'Juan',
  apellido: 'Gomez',
  edad: 13
}

function imprimirProfesiones(persona) {
  console.log(`${persona.nombre} es:`)

  if (persona.ingeniero) {
    console.log('Ingeniero')
  } else {
    console.log('No es ingeniero')
  }

  if (persona.cocinero) {
    console.log('Cocinero')
  }

  if (persona.dj) {
    console.log('DJ')
  }

  if (persona.cantante) {
    console.log('Cantante')
  }

  if (persona.guitarrista) {
    console.log('Gutiarrista')
  }

  if (persona.drone) {
    console.log('Piloto de drone')
  }
}

const MAYORIA_DE_EDAD = 18

// const esMayorDeEdad = function (persona) {
//   return persona.edad >= MAYORIA_DE_EDAD
// }
// => array function retorna algo de manera implicita
const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD

// function imprimirSiEsMayorDeEdad(persona) {
//   if (esMayorDeEdad(persona)) {
//     console.log(`${persona.nombre} es mayor de edad`)
//   } else {
//     console.log(`${persona.nombre} es menor de edad`)
//   }
// }

imprimirSiEsMayorDeEdad = (persona) => {
  if (esMayorDeEdad(persona)) {
    console.log(`${persona.nombre} es mayor de edad`)
  } else {
    console.log(`${persona.nombre} es menor de edad`)
  }
}

// function permitirAcceso (persona)  {
//   if (!esMayorDeEdad(persona)) {
//     console.log('ACCESO DENEGADO')
//   }
// }
// se quita la palabra function se iguala al parametro si es uno solo se puede dejar sin ()
// y se coloca => que indica que es una funcion
 permitirAcceso = persona => {
  if (!esMayorDeEdad(persona)) {
    console.log('ACCESO DENEGADO')
  }
  else 
  console.log('Admitido')
}

/**********************/
//asignar a una variable una funcion
const permitirAccesoEdad = ({ edad }) => !esMayorDeEdad({ edad}) ? console.log('Acceso denegado') : console.log('Adelante')
permitirAccesoEdad(juan)