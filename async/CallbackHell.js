
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
    otrocallback(nombre);
  },1000);
}
function Hablar(callbackHablar){
  setTimeout(function() {
    console.log("bla bla bla bla");
    callbackHablar();
  },1000 )
}

// Esto es una funcion recursiva
function conversacion(nombre, veses,callback){
  if (veses > 0){
    Hablar(function () {
      conversacion(nombre, --veses, callback);
    })
  }else{
    Adios(nombre, callback);
  }
}

// --

console.log("Iniciando proceso ...");
Hola("Diego",function (nombre) {
  conversacion(nombre,3,function(){
    console.log("proceso terminado ....");
  });
});

// lo de ariva^ es lo msimo que lo de avajo
// Hola("Diego",function(nombre)  {
//   Hablar(function() {
//     Hablar(function() {
//       Hablar(function() {
//         Adios(nombre, function() {
//           console.log("terminando proceso ...");
//         });
//       });
//     });  
//   });
// });

