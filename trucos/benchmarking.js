console.time('todo');

let suma = 0;

console.time('bucle1:');
for(let i = 0 ; i < 10000000; i++ ){
  suma += i;
}
console.timeEnd('bucle1:');

let suma2 = 0;

console.time('bucle2:');
for(let j = 0 ; j < 10000000; j++ ){
  suma2 += 1;
}
console.timeEnd('bucle2:');

console.time('asincrona:');
asincrona()
  .then( () => { 
    console.timeEnd('asincrona:');
  } ) 

console.timeEnd('todo');

function asincrona() {
  return new Promise( (resolve) => {
    setTimeout( () => {
      console.log("Termina el proceso asincrona");
      resolve();
    } )
  } )
}