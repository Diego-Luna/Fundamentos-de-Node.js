const bcryt = require('bcrypt');

const password = '1234segura!';

bcryt.hash(password,5, function(err, hash) {
  console.log(hash);

  bcryt.compare(password,hash, (err,res) => {
    console.log(err);
    console.log(res);
  });
} );