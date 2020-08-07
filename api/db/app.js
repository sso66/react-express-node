// File: /db/controllers/create_db.js
// Date: 8/6/2020
// Note: Final steps to Production

console.log("Mounting all databases in CouchDB db/app.js...");

var initCouch = require('./controllers/init_couch');

initCouch(function(err) {  
    if (err) {
        throw err
    }
    else {
        console.log('...couchdb initialized');
    }
});

// eof
