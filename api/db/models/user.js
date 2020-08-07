// File: db/models/user.js
// Date: 8/7/2020
// Note: Final steps to Production

console.log("db/model/users.js...")

var users = require('../services/couchdb').use('users');

// ___ user.mail is the user id for CouchDB users database ___
exports.create = function create(user, cb) {  
    users.insert(user, user.email, cb);
};


// eof
