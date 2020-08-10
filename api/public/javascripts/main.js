// File: public/javascripts/main.js
// Date: 8/9/2020
// Note: Node.js App: http server code

console.log("Mounting main.js...\n");

var httpModule =  require('./http-module');
var http = require('http');
var port = 8180;

http.createServer(httpModule.handle_request).listen(port, '127.0.0.1');
console.log('Started Node.js http server at http://127.0.0.1:' + port);

// eof
