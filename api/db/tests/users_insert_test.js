// File: db/tests/users_insert_test.js
// Date: 8/7/2020
// Note: Final Steps to Production


console.log("db/test/users_insert_test.js...");

var users = require('../models/user');

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
