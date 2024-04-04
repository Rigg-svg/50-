/* 4. Este programa te ayuda a viajar. El programa pide al usuario si va a viajar con coche, tren,
bicicleta o autobús. Si va en tren o autobús le recordará que lleve dinero para el billete. */

function viaje(){
    const inputs = process.argv;

    const metodo_viaje = inputs[2]

    if(metodo_viaje == "tren" || metodo_viaje == "autobús"){
        console.info("RECUERDE LLEVAR DINERO PARA EL TIKET");
    }
}

viaje()