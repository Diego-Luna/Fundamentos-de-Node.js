
function asincrona(callback){
  setTimeout( () =>{
    try{
      let a = 3 + z;
      callback(null, a);
    } catch(e){
      callback(e);
    }
  }, 1000)
}

  asincrona( function(err, dato) {
    if(err){
      console.error("tenemos un error :");
      console.error(err);
      return false;
      // throw err; // No va a funcionar en 
    }
    console.log("todo va de maravilla mi data es: ", dato);
    
  } );
