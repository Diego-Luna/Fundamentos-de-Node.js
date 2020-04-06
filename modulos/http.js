const http = require('http');

function router(req, res){
  console.log("Nueva peticion");
  console.log(req.url);

  switch (req.url) {
    case '/hola':
      let saludo =  hola();
      res.write(saludo);
      res.end();
      break;
  
    default:
      res.write("Error 404:No se lo que quieres");
      res.end();
  }
  // res.writeHead(203,{ 'content-Type': 'text/plain' });

  // // Respuesta al usuario
  // res.write("Hola, ya se usar HTTP de NodeJS ")

  // res.end();
}

http.createServer(router).listen(3000);

function hola(){
  return "Hola que tal :D";
}

console.log("escuchando http en el puerto 3000");


