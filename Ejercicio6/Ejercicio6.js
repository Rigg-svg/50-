/* 6. Una tienda aplica un descuento del 15% para las compras que incluyan más de 10 artículos
iguales cuyo precio sea superior a 40 euros. Tu programa debe comprobar y calcular la cantidad a
pagar sabiendo el número de artículos y el precio de cada uno. */

function descuento(){
    const inputs = process.argv;

    console.log(inputs);

    const articulo = inputs[2];
    const cantidad = +inputs[3];
    let total;

    if(articulo == "Articulo_A"){
        /* Precio articulo A : 5 */
        total = 5 * cantidad;

    }else if(articulo == "Articulo_B") {
        /* Precio articulo A : 8 */
        total = 8 * cantidad;
    } 
    else{
        console.log("INGRESE UN VALOR VALIDO");
    }

    if(total > 40){
        console.log(`Valor a pagar con el 15% de descuento: ${total*0.75}`);
    }
}

descuento()