console.log("model/users.js...")

var users = require('../controllers/couchdb').use('users');
exports.create = function create(user, cb) {  
  users.insert(user, user.email, cb);
};

// eof
