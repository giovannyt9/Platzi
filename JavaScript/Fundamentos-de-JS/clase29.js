const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true }

const onPeopleResponse = function (persona) {
  console.log(`Hola, yo soy ${persona.name}`)
}
// funcion para hacer multiples request
function obtenerPersonaje(id) {
  const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
  $.get(url, opts, onPeopleResponse)

}
// No los ejecutara en orden lo ejecutara de acuerdo a la peticion de servidor
//(ASINCRONISMO)
  for (i = 0; i <= 30; i++) {
    obtenerPersonaje(i)
  }
// obtenerPersonaje(5)
// obtenerPersonaje(6)
// obtenerPersonaje(8)
