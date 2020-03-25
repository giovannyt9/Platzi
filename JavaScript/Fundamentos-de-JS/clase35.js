const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true }

function obtenerPersonaje(id) {
  return new Promise((resolve, reject) => {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $
      .get(url, opts, function (data) {
        resolve(data)
      })
      .fail(() => reject(id))
  })
}

function onError(id) {
  console.log(`Sucedió un error al obtener el personaje ${id}`)
}
//funcion asincrona
async function obtenerPersonajes() {
  var ids = [1, 2, 3, 4, 5, 6, 7]
  ids.push(50)
  var promesas = ids.map(id => obtenerPersonaje(id))
  try {
    //await detiene la ejecución del programa hasta que todas las promesas sean resueltas.
    // var personajes cuando la promesas se resuelvan guardelo en la variable
    var personajes = await Promise.all(promesas)
    console.log(personajes)
  } catch (id) {
    onError(id)
  }
}

obtenerPersonajes()
