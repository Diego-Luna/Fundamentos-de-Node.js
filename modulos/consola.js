console.log("algo");
console.error("algun error");
console.warn("algun warn");

var tabla = [
  {
    a:1,
    b:"b",
    c:3
  },
  {
    a:"b",
    b:1
  }
]
// lo convierte en una tabla
console.table(tabla);

console.log("Conversacion: ");
console.group("conver");
console.log("Hola");
console.group("tacos bla");
console.log("tacos bla tacos bla tacos bla tacos blatacos bla");
console.log("tacos bla tacos bla tacos bla tacos blatacos bla");
console.log("tacos bla tacos bla tacos bla tacos blatacos bla");
console.groupEnd("tacos bla");
console.log("Adios");
console.groupEnd("conver");

console.log("cosas de funciones");


function funcion1() {
  console.group("funcion1")
  console.log("Esto es de la funcion 1");
  console.log("Esto es de la funcion 1");
  console.log("Esto es de la funcion 1");
  funcion2()
  console.log("Volvemos ala funcion1");
  
  console.groupEnd("funcion1")
}
function funcion2() {
  console.group("funcion2")
  console.log("Esto es de la funcion 2");
  console.log("Esto es de la funcion 2");
  console.log("Esto es de la funcion 2");
  console.groupEnd("funcion2")
  
}

console.log("Empesamos");
funcion1();

console.count("tacos")
console.count("tacos")
console.count("tacos")
console.count("tacos")
console.countReset("tacos")
console.count("tacos")







