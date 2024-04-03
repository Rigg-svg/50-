/* 3. Generar un código determine la diferencia ( resta ) entre dos números de tal manera que la resta
siempre se haga del numero mayor hacia el numero menor */

function resta(num1,num2){
    if(num1>num2){
        resultado = num1 - num2
    }else{
        resultado = num2 - num1
    }

    console.log(resultado)
}

resta(14,30)



