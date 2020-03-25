//URL de la api de personajes de Star wars
const API_URL = 'https://swapi.co/api/'
//people/1 2 3 4 etc
const PEOPLE_URL = 'people/:id'


const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 5)}`
/*Se agrega esa configuración cuando la ** URL ** desde donde se llama a la API, difieren.
Por ejemplo acá lo estamos llamando desde
file: //
  y la dirección de la API es
https: //swapi.co*/
const opts = { crossDomain: true }

// CALLBACK se ejecutara en algun momento (cuando termine el request)
const onPeopleResponse = persona => {
  console.log(`Hola yo soy, ${persona.name} y mido ${persona.height} cm`)
}
// console.log(arguments)

$.get(lukeUrl, opts, onPeopleResponse)
