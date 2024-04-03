/* Crea un programa que pida la nota de un estudiante en los tres trimestres del curso y calcule la nota
promedio. El resultado que dará será suspenso si la media es menor de 5, aprobado si está entre 5 y 7
y Notable por encima de 7. */


function estudiante(nota1,nota2,nota3){

    let operacion = nota1+nota2+nota3
    let total = operacion/3
    console.log(total)

    if(total<5){
        console.log("suspenso")
    }else if(total>=5 && total<=7){
        console.log("aprobrado")
    }else if(total>7){
        console.log("Notable")
    }
}

estudiante(5,8,4)

