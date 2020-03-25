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

imprimirProfesiones(sacha)

/************************************************* */
var kathy={
  nombre: 'Katherine',
  profesion: 'ingeniera',
  edad: 27,
  pais: 'Colombia'
}
var skills= {
  frontend: 'React',
  backend: 'Python'
}
function imprimirSiEsMayorDeEdad(persona, skill) {
  personaMayorDeEdad = persona.edad > 18 ? true : false

  if (personaMayorDeEdad) {
    console.log(`${persona.nombre} es mayor de edad tiene ${persona.edad} años :D, ella tiene conocimientos en ${skill.backend}`)
  } else {
    console.log(`${persona.nombre} es menor de edad`)
  }
}

imprimirSiEsMayorDeEdad(kathy, skills)