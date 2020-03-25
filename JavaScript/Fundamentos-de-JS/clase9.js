var x = 4, y = '4'
// x==y es true
//x === y es false
var sacha = {
  nombre: 'Sacha'
}

var otraPersona = {
  nombre: 'Sacha'
}
// == es par saber igualdad con relacion al valor sin importar su tipo, por ejemplo 1 == ‘1’ da true porque estas comparando el 1
sacha.nombre == otraPersona.nombre //true
//con === da false porque no solo estas comparando que ambos sean 1, ademas debes garantizar que ambos o son string o son de tipo numerico.
sacha.nombre === otraPersona.nombre //true

// AL COMAPARAR OBEJETO COMO:
// sacha == otraPersona dara  false 
// igual con === ya que toma como referencia su variable