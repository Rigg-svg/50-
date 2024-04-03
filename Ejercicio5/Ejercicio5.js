/* En un tramo de un rally los conductores no deben ir ni demasiado rápido ni demasiado lentos. Este
ejercicio debe tomar la longitud del tramo en kilómetros y el tiempo empleado, si la velocidad está entre
40 y 60 km/h el conductor pasa la prueba en caso contrario es descalificado. */


let velocidad = 130
let tiemporecorrido = 2

if(velocidad/tiemporecorrido <= 60 && velocidad/tiemporecorrido >=40){
    console.log("paso prueba")
}else{
    console.log("descalificado")
}