var signo = prompt('¿Cuál es tu signo?');

switch (signo) {
    case 'acuario':
        console.log('Acuario');
        break;
    case 'piscis':
        console.log('Piscis');
        break;
    case 'aries':
        console.log('Aries');
        break;
    case 'géminis':
    case 'geminis':
        console.log('Géminis');
        break;
    default:
        console.log('NO INGRESO UN SIGNO VALIDO.');
        break;
}