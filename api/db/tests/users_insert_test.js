// File: db/tests/users_insert_test.js
// Date: 8/6/2020
// Note: Final steps to Production


console.log("db/users_insert_test.js...");

var users = require('../models/users');

var user = {  
    email: 'johndoe@example.com',
    name: 'John Doe',
    address: '1 Sesame Street'
};

users.create(user, function(err) {  
    if (err) {
      throw err;
    }
  else {
      console.log('user inserted');
  }
});

// eof
