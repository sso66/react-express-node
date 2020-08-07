// File: db/app.js
// Date: 8/7/2020
// Note: Final Steps to Production

console.log("Mounting all databases in CouchDB: db/app.js...");

var initCouch = require('./services/init_couch');

initCouch(function(err) {  
    if (err) {
        throw err
    }
    else {
        console.log('...couchdb initialized');
    }
});

// eof
