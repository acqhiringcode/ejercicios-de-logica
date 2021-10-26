// Crear una funcion que devuelva por consola los numeros del 1 al 10
// Crear una funcion que acepte dos numero como parametros, y hacer que esta devuelva por consola los 
// numeros desde y hasta que nosotros les pasamos.

// Ejemplo

// devuelveNumeroDesdeHasta(5, 9);
function devolverNumero(numero,letra) {
    console.log("devolverNumero");
    for (let i = numero; i <= 9; i ++) {
        console.log(i,letra);
    }
}
devolverNumero(5,"listo_Fer")

// Resultado por consola
// 5
// 6
// 7
// 8
// 9