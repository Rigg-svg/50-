/* 10. Escribir un programa que pregunte al usuario su renta anual y muestre por pantalla el
tipo impositivo que le corresponde. */

function impositivo() {
    const inputs = process.argv;

    const renta_anual = +inputs[2];

    if (renta_anual >= 60000) {
        console.log("Impositivo a pagar 40%");
    } else if (renta_anual >= 35000) {
        console.log("Impositivo a pagar 30%");
    } else if (renta_anual >= 20000) {
        console.log("Impositivo a pagar 20%");
    } else if (renta_anual >= 10000) {
        console.log("Impositivo a pagar 15%");
    } else {
        console.log("Impositivo a pagar 5%");
    }
}

impositivo();
