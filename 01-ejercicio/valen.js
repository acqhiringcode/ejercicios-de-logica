// Crear una funcion que devuelva por consola los numeros del 1 al 10

function devolverNumero(numero,letra) {
    console.log("devolverNumero");
    for (let i = numero; i >= 1; i --) {
        console.log(i,letra);
    }
}
devolverNumero(47,"hola")