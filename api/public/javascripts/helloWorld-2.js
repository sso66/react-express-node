// File: lib/helloWorld-2.js
// Date: 8/10/2020
// Note: Navigation (routing)

console.log("Mounting helloWorld.js");

var http = require('http');

http.createServer(function(req, res) {
    // normalize url by removing querystring, optionally
    // trailing slash, and making it lowercase
    var path = req.url.replace(/\/?(?:\?:*)?$/, '').toLowerCase();

    switch(path) {
        case '':
            res.writeHead(200, { 'Content-type': 'text/plain' });
            res.end('Home');
            break;
        case '/about':
            res.writeHead(200, { 'Content-type': 'text/plain' });
            res.end('About');
            break;
        default:
            res.writeHead(400, { 'Content-type': 'text/plain' });
            res.end('Not Found');
            break;            
    }
}).listen(3000);

console.log("Server started on localhost:3000; press Ctrl-C to terminate...");


// eof

// To browse to:
// 1. Homepage: http://localhost:3000
// 2. About: http://localhost:300/about
// 3. Any querystring will be ignored (so http://localhost:3000/?foo=bar 
//     will serve the home page).
// 4. And, any other URL (http://localhost:3000/f00) will serve the 
//     Not Found page.
 