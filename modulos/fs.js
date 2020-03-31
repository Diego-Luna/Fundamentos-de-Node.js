const fs = require("fs");

function leer(ruta,cb){
  fs.readFile(ruta,(err, data) => {
    // Leido
    cb(data.toString());
  })
}

function escribir(ruta,contenido, cb){
  fs.writeFile(ruta,contenido, (err) => {
    if(err){
      console.log("No e podido escribirlo",err);
    } else{
      console.log("Se a escrito en el archivo");
    }
  } )
}

function borrar(ruta,cb){
  fs.unlink(ruta, cb)
}

// esto es para leerlo
// leer(__dirname + '/archivo.txt', console.log);

// Esto es para crear uno nuevo, o escribirlo
// escribir(__dirname+'/Hola1.txt','holo hola1', console.log)

borrar(__dirname+'/Hola1.txt',console.log);