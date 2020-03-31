function otreFuncion(){
  serompe();
}

function serompe() {
  return 3 + z; 
}

function seRopeAsincrona(cb){
  setTimeout( function() {
    try{
      return 3 + c;
    } catch(err) {
      console.log("Error en mi funcion asincrona");
      cb(err)
    }
  }, )
}

try{ 
  // otreFuncion();
  seRopeAsincrona(function (err) {
    console.log("Hay error");
    console.log(err.message);
  });
} catch(err){
  console.group("error")
  console.log("valla algo sea roto");
  console.log(err.message);
  console.log(err);
  console.log("Pero no pasa nada lo hemos capturado");
  console.groupEnd("error")
  
}

console.log("esto esta hasta el final");
