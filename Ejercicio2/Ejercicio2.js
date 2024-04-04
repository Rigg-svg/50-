function num(){
    const processENV = process.argv;

    console.log(processENV);

    const n = +processENV[2];

    if(n > 0){
        console.log("EL NUMERO ES POSITIVO");
    }
    else{
        console.log("EL NUMERO ES NEGATIVO");
    }
}

num()