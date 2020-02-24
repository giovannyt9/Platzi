¿Qué son y cómo se usan las peticiones HTTP?
    PETICIONES HTTP:
    Protocolo para transferir informacion, incluso puntos de Iot, es un lenguaje comun.

    PETICION:
    1 cliente(servidor,pc) --> envia peticion a internet --> envia al servidor --> luego viceversa. Tiene cabeceras como:
    GET HTTP/1.1
    host(a donde pides), referer(de donde viene), user-agent, connection(mantenerla viva o no)
    RESPUESTA: HTTP/1.1 200 OK
    La version del HTTP debe ser el mismo entre la peticion y respuesta


Metodos:
    GET: recoger informacion del servidor:listas, traer archivos, css
    POST: añadir informacion
    PUT: reemplazar informacion: contenido de una pagina
    PATCH: cuando queremos modificar solo una parte de la informacion
    DELETE: eliminar informacion, productos del carrito por ejemplo.
    OPTIONS: pedir informacion sobre metodos.
        Saber si podemos ejecutar los anteriores

Cabeceras:
    Nos dan informacion contextual de la petición: Como quiero hacerlo:

Request: Autenticacion,cache, indicaciones:
    Cookies: permiten compartir informacion entre peticiones, guardar info para mantener la sesion
    CORS: manejar informacion desde fuera de nuestro servidor, cuando consume informacion desde un lado externo
    Access-Control-Allow-Origin, desde donde puedo consumir
    ACCEPT: Define el contenido que puede aceptar por ejem: codificacion UTF-8 archivos js
    Autenticacion: Para poder pedir cosas al servidor
    Cache: Almacenamiento temporal, gestionar durante cuanto tiempo la respuesta sera la misma, evita menos peticiones pues las almacena
    Estados: Numero que indica lo que paso con la peticion:
        200: Ok
        201-Crea
        300- Redireccion de la peticion, por el recurso
        400-40x Errores del cliente
        500- Error interno del servidor


CUERPO Y QUERY DE LA PETICION:
    CUERPO:
    Informacion de la peticion. Los datos del usuario que queremos añadir o enviar al servidor o lo que pedimos. 
    CONTENT-TYPE:
    Que formatos: Depende de las cabeceras: Ej. -> text/html, text/css, application/json (el archivo js para que el navegador lo ejecute) image/jpeg

REQUEST: Es la peticion al servidor
    Ej. POST: usuario sin id, GET a platzi.com
    RESPONSE: Cualquier metodo que recibimos del servidor, ejm: content-type: application/json, viene este archivo con el id traido del servidor., trae un html de index.html de platzi

QUERY:
    Informacion extra. Orden en el que quiero que vuelvan los parametros. Por ejemplo cuando le pasamos un id
    api.com/person?orderBy=name&age=25
    Para compartir datos con el frontend, nunca debe enviarse info sensible como tokens o tarjetas de creditos visibles en los parametros del query para la url
    Ej. miweb.com?color=red

    ESTRUCTURA:
    Añadir ? al final de la URL
    nombre=valor, ejemplo id=3
    Separarlos con & si es más de 1 parámetro