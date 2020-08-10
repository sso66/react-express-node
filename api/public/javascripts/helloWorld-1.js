// File: lib/helloWorld-1.js
// Date: 8/10/2020
// Note: Communication & Activation (servicing/resourcing)

console.log("Mounting helloWorld.js");

var http = require('http');

http.createServer(function(req, res) {
    // res.writeHead(200, { 'Content-type': 'text/plain' });
    // res.end('Hello world!');

    // res.writeHead(200, { 'Content-type': 'text/html' });
    // res.end('<h1>Hello world!</h1>');

    res.writeHead(200, { 'Content-type': 'application/json' });
    res.end('{ "message" : "Hello world!" }');

}).listen(3000);

console.log("Server started on localhost:3000; press Ctrl-C to terminate...");
// eof