console.log('controllers/create_db.js...');

var couch = require('./couchdb');

couch.db.create('eagleton', function(err) {  
    if (err && err.statusCode != 412) {
        console.error(err);
    }
    else {
        console.log('database eagleton already exists');
    }
});

// eof