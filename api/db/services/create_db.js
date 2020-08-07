// File: db/controllers/create_db.js
// Date: 8/6/2020
// Note: Final steps to Production

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