// File: db/controllers/couchdb.js
// Date: 8/6/2020
// Note: Final steps to Production

console.log('Connecting CouchDB couchdb.js...');

var nano = require('nano');
module.exports = nano(process.env.COUCHDB_URL || 'http://127.0.0.1:5984');


// eof
