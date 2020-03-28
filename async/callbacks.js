// Ejemplo 1
// function soyAsincrona(micallback){
//   // console.log("Hola soy una funcion asincrona");
//   setTimeout(function () {
//     console.log("estoy siendo asincrona");
//     micallback();
//   },1000)
// }
// console.log("Iniciando proceso ...");

// soyAsincrona(function()  {
//   console.log("terminando proceso ...");
// } );

function Hola(nombre,micallback){
  // console.log("Hola soy una funcion asincrona");
  setTimeout(function () {
    console.log(`Hola ${nombre}`);
    micallback(nombre);
  },1500);
}
function Adios(nombre, otrocallback){
  setTimeout(function () {
    console.log(`Adios ${nombre}`);
    otrocallback();
  },1000);
}

console.log("Iniciando proceso ...");

Hola("Diego",function(nombre)  {
  Adios(nombre, function() {
    console.log("terminando proceso ...");
  });
});

// Hola("Diego",function() {});
// Adios("Diego",function() {});
