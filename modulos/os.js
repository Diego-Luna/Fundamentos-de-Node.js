// "os", es el sistema operativo
const os = require("os");

// con esto vemos la arquitectura del sistema operativo
console.log(os.arch());

// para ver la plataforma
console.log(os.platform());

// podemos acseder la informacion de los cpu
console.log(os.cpus());

// cuantos procesos puedo levantar con node
console.log(os.cpus().length);

// Podemos ver todos los errores y avisos del sistema
console.log(os.constants);

// como ver la memoria
const SIZE = 1024
function kb(bytes) {
  return bytes / SIZE;
}
function mb(bytes) {
  return kb(bytes) / SIZE;
}
function gb(bytes) {
  return mb(bytes) / SIZE;
}

console.log(os.freemem());
console.log(kb(os.freemem()));
console.log(mb(os.freemem()));
console.log(gb(os.freemem()));

console.log(gb(os.totalmem()));

console.log(os.homedir());

// todos los sitemas operativos tienen un directorio para archivos temporales
console.log(os.tmpdir());

console.log(os.hostname());

// traaer me todas las interfases de red
console.log( os.networkInterfaces() );










