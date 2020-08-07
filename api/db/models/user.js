// File: db/models/user.js
// Date: 8/7/2020
// Note: Final steps to Production

console.log("db/model/users.js...")

var schemas = require('../schemas')
var errors = require('../errors/errors');

var users = require('../services/couchdb').use('users');

/// Create user
// ___ user.mail is the user id for CouchDB users database ___
// NoSQL INSERT Statement for user
exports.create = function create(user, cb) {  
    users.insert(user, user.email, cb);
};

/// Update user

// NoSQL UPDATE Statement for user
// exports.update =  schemas.validating('user', updateUser);

// function updateUser(user, cb) {  
//     users.insert(user, errors.wrapNano(cb));
// };

// eof
