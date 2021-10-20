// Crear una funcion que devuelva por consola los numeros del 1 al 10

function devuelveNumerosConFor(){
    console.log('Devuelvo numero con bucle for');
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}
devuelveNumerosConFor();


function devuelveNumerosConWhile(){
    let iterador = 1;
    console.log('Devuelvo numero con bucle while');
    while(iterador <= 10) {
        console.log(iterador);
        iterador++;
    }
}
devuelveNumerosConWhile();