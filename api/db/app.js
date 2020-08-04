console.log("Mounting db/app.js...");

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
