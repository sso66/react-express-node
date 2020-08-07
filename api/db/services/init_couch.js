// File: db/controllers/init_couch.js
// Date: 8/6/2020
// Note: Final steps to Production

console.log("Initializing databases CouchDB init_couch.js...");

var async = require('async');  
var couch = require('./couchdb');

var databases = ['home', 'about', 'products', 'contact'];

module.exports = initCouch;

function initCouch(cb) {  
    createDatabases(cb);
}

function createDatabases(cb) {  
    async.each(databases, createDatabase, cb);
}
function createDatabase(db, cb) {  
    couch.db.create(db, function(err) {
        if (err && err.statusCode == 412) {
            err = null;
        }
        cb(err);
    });
}

// eof
