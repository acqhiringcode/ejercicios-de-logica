// Crear una funcion que acepte dos numero como parametros, y hacer que esta devuelva por consola los 
// numeros desde y hasta que nosotros les pasamos.

// Ejemplo

// devuelveNumeroDesdeHasta(5, 9);

// Resultado por consola
// 5
// 6
// 7
// 8
// 9

// function devuelveNumeroDesdeHasta(valorInicio, valorFinal) {
//     for (let i = valorInicio; i < valorFinal; i++) {
//         console.log(i);
//     }
// }

// devuelveNumeroDesdeHasta(5, 9);


let devuelveNumeroDesdeHasta = function (valorInicio, valorFinal) {
    for (let i = valorInicio; i < valorFinal; i++) {
        console.log(i);
    }
}

devuelveNumeroDesdeHasta(5, 9);


