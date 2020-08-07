// File: db/services/couchdb.js
// Date: 8/7/2020
// Note: Final Steps to Production: Admin Party!

console.log('Connecting CouchDB db/services/couchdb.js...');

var nano = require('nano');
module.exports = nano(process.env.COUCHDB_URL || 'http://127.0.0.1:5984');


// eof
