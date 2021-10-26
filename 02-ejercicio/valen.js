// Crear una funcion que devuelva por consola los numeros del 1 al 10
// Crear una funcion que acepte dos numero como parametros, y hacer que esta devuelva por consola los 
// numeros desde y hasta que nosotros les pasamos.

// Ejemplo

// devuelveNumeroDesdeHasta(5, 9);

function ponerNumero(numero,letra) {
    console.log("ponerNumero");
    for (let i = numero; i <= 9; i ++) {
        console.log(i,letra);
    }
}
ponerNumero(5,"listo_Fer");

// quedaria
function ponerNumero(numero, fin, letra) {
    console.log("ponerNumero");
    for (let i = numero; i <= fin; i++) {
        console.log(i,letra);
    }
}
ponerNumero(5,9,"listo_Fer");


// ta perfecto pero esta hardcoded, es decir duro.
// los parametros que pasan por la funcion son dos

// numeroDeComienzo, numeroFinal

// ponerNumero(5,9);
// en la funcion el segundo parametro deberia ser el numero limite

// esto:
// function ponerNumero(numero,letra) {

// por:
// function ponerNumero(numero,fin) {

// dentro del for falto modificar [ i <= 9  ] por [ i <=  fin]


// la variable index ,que es la que itera, empieza en el numero que le pasamos 
// y termina en el numero que nosotros queremos, a traves de la condicion, 
// cuando el numero llegue a numeroFinal. Frena el loop


// Resultado por consola
// 5
// 6
// 7
// 8
// 9