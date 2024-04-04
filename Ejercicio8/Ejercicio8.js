/* 8. Para tributar un determinado impuesto se debe ser mayor de 16 años y tener unos ingresos
iguales o superiores a 1000 € mensuales. Escribir un programa que pregunte al usuario su edad
y sus ingresos mensuales y muestre por pantalla si el usuario tiene que tributar o no */

function impuesto(){
    const inputs = process.argv;

    const edad = +inputs[2];
    const ingresos = +inputs[3];

    if(edad >= 16 && ingresos >= 1000){
        console.log("TIENE QUE TRIBUTAR");
    }
    else{
        console.log("NO TIENE QUE TRIBUTAR");
    }
}

impuesto()