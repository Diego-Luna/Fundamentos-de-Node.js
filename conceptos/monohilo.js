// Node es multi ilos en el ejemlo de avajo primero ejecuta los "log" y luego va por el "setInterval  "
// 
// para poner no andar en la terminal ponemos "node (nombre del archivo)"

console.log("Hola mundo de node");

let i = 0 ;

// el "setInterval() " nos ayuda a tener el eventLoop simpre escuchando para simpre, y cada cuanto timpo va a ejecutar esto
setInterval( function () {
  console.log(i);
  i++;

  // if (i === 5){
  //   var  a = 3 + z;
  // }
}, 1000); 

console.log("Segunda instrucción!!");

