
async function Hola(nombre){
  return new Promise(function(resolve,reject){
    setTimeout(function () {
      console.log(`Hola ${nombre}`);
      resolve(nombre);
    },1500);
  });
}
async function Adios(nombre){
  return new Promise((resolve,reject) => {
    setTimeout(function () {
      console.log(`Adios ${nombre}`);
      resolve(nombre);
    },1000);
  })
}
async function Hablar(nombre){
  return new Promise( (resolve,reject) => {
    setTimeout(function() {
      console.log("bla bla bla bla");
      resolve("((( hay un error :D ))) ");
    },1000 )
  });
}

async function main(){
  let nombre = await Hola("Diego");
  await Hablar();
  await Hablar();
  await Hablar();
  await Adios(nombre);  
}

// --ejecucion
console.log("-----------------Empesamos proceso-----------------");
main();
console.log("-----------------Terminando proseso-----------------");
