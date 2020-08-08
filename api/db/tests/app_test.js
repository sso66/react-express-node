// app_test.js
// This module contains Express routes and CouchDB I/O resources...
console.log("Mounting app_test.js...");

var express = require('express');

var router = require('./route_test');
var controller = require('./controller_test');

// MVP (Minimal Viable Product)
app = express();

app.use('/all', router);
app.use('/all', controller);

module.exports = app;


// eof

/*
$ node app_test

Mounting app_test.js...
Mounting route_test.js...
Mounting resource_test.js...
Save a document
Get all documents with the build-in 'All view
Mounting controller_test.js...
Mounting model_test.js...

*/