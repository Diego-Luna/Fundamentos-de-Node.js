
function Hola(nombre){
  return new Promise(function(resolve,reject){
    setTimeout(function () {
      console.log(`Hola ${nombre}`);
      resolve(nombre);
    },1500);
  });
}
function Adios(nombre){
  return new Promise((resolve,reject) => {
    setTimeout(function () {
      console.log(`Adios ${nombre}`);
      resolve(nombre);
    },1000);
  })
}
function Hablar(nombre){
  return new Promise( (resolve,reject) => {
    setTimeout(function() {
      console.log("bla bla bla bla");
      reject("((( hay un error :D ))) ");
    },1000 )
  });
}

// --ejecucion

console.log("-------Iniciando el procesos-------");
Hola("Diego")
  .then( Hablar )
  .then( Hablar )
  .then( Hablar )
  .then( Hablar )
  .then( Adios )
  .then( ( nombre ) => {
    console.log("-------Terminado el procesos-------");
  })
  .catch( ( error ) => {
    console.error(" ((( hay un error :D ))) ");
    console.error(error);
  });
