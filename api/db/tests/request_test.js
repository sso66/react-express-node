// request_test.js

console.log("Mounting request_test.js...");

var request = require('request');

var url = 'http://127.0.0.1:5984/';
var db = 'mydatabase/';
var id = 'sun.stephen.oo@gmail.com';

console.log("Creating a database/collection inside CouchDB");
request.put(url + db, function(err, res, body) {
    console.log("Add a document with and ID: " + url + '' + db);
    request.put({
        url: url + db + id,
        body: { message: 'New Gloom Document', user: 'stefan' },
        json: true,
    }, function(err, res, body) {
        console.log("Read the document " + err + ' ' + res + ' ' + body);
        request(url + db + id , function(err, res, body) {
            console.log("request: " + (url+db+id));
            console.log("document: " + body); 
        });
    });
});

// eof
