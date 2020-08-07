// File: db/services/create_db.js
// Date: 8/7/2020
// Note: Final Steps to Production: Admin Party!

console.log("Creating database in CouchDB: init_couch.js...");

var couch = require('./couchdb');

couch.db.create('eagleton', function(err) {  
    if (err && err.statusCode !== 412) {
        console.error(err);
    }
    else {
        console.log('eagleton database already exists');
    }
});

// eof