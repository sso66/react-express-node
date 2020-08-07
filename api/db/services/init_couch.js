// File: db/services/init_couch.js
// Date: 8/7/2020
// Note: Final Steps to Production: Admin Party!

console.log("Initializing databases CouchDB db/services/init_couch.js...");

var async = require('async');  
var couch = require('./couchdb');

var databases = ['test1', 'test2', 'test3'];

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
