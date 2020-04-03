

process.on("beforeExit",() => {
  console.log(" el va a terminar");
});

process.on("exit",() => {
  console.log("Diego, el proceso termino");

  setTimeout( ()=>{
    console.log("Esto no seva a aparecer");
  },0 );
});

setTimeout( ()=>{
  console.log("Esto si seva a aparecer");
},0 );

// es para eseciones(errores) que no sean capturado.
process.on("uncaughtException", (err, origen ) => {
  console.error("----Vaya se nos a pasado un capturar un error---- ");
  setTimeout( ()=>{
    console.log("Esto si seva a aparecer");
  },0 );
});

funcionQueNoExiste();

console.log("*******esto si el error no se recoge no pasa*******");
