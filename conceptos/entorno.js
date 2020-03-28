
// las variables de entor no las pongo en mayusculas


let nombre = process.env.NOMBRE || "Sin nombre";
let web = process.env.WEB || "no tengo web";

require('dotenv').config();
const lista = process.env.MI_LISTA.split(',');

console.log(process.env.NAME);
console.log(lista);


console.log('Hola ' + nombre);
console.log('Mi web es: ' + web);

console.log("iniciamos con nodemon");
