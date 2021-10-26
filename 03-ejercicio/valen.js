// Recorrer el array y mostrarme por consola todos los personajes dentro del array junto con su posicion dentro del mismo

let pesonajesDeLol = ['lux', 'morgana', 'nautilus', 'blitzcrank', 'garen'];

function pesonajes(numero, fin, personaje) {
    console.log("personajesConNumero");
    for (let i = numero; i <= fin; i++) {
        console.log(i, personaje);
    }
}
pesonajes( 0,4,'morgana',);

// resultado


// lux 0 
// morgana 1
// nautilus 2 
// blitzcrank 3
// garen 4

// esta mal pero no me sale y vi el final pero tampoco lo entiendo mucho