// File: db/models/users.js
// Date: 8/6/2020
// Note: Final steps to Production

console.log("model/users.js...")

var users = require('../controllers/couchdb').use('users');

// 
exports.create = function create(user, cb) {  
    users.insert(user, user.email, cb);
};

// eof
