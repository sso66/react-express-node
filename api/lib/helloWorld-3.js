// File: lib/helloWorld3.js
// Date: 8/10/2020
// Note: Communicate/Activate/Navigate: Aviation Design Pattern

console.log("Mounting helloWorld.js");

var http = require('http');
var fs = require('fs');

// Resourcing: Activation
function serveStaticFile(res, path, contentType, responseCode) {
    if (!responseCode) {
        responseCode = 200;
    }
    fs.readFile(__dirname + path, function(err, data) {
        if (err) {
            res.writeHead(500, { 'Content-type': 'text/plain' });
            res.end('500 - Internal Error');
        } else {
            res.writeHead(responseCode, { 'Content-type': contentType });
            res.end(data);
        }
    });
}

// Serving: Communication
http.createServer(function(req, res) {
    // normalize url by removing querystring, optionally
    // trailing slash, and making it lowercase
    var path = req.url.replace(/\/?(?:\?:*)?$/, '').toLowerCase();
	
	// Routing: Navigation
    switch(path) {
        case '':
            // res.writeHead(200, { 'Content-type': 'text/plain' });
            // res.end('Homepage');
            serveStaticFile(res, '/public/home.html', 'text/html');
            break;
       case '/about':
            // res.writeHead(200, { 'Content-type': 'text/plain' });
            // res.end('About');
            serveStaticFile(res, '/public/about.html', 'text/html');
            break;
        case '/images/logo.gif':
           serveStaticFile(res, '/public/images/logo.gif', 'image/gif')
        default:
            // res.writeHead(400, { 'Content-type': 'text/plain' });
            // res.end('Not Found');
            serveStaticFile(res, '/public/404.html', 'text/html');
            break;            
    }
    
}).listen(3000);

console.log("Server started on localhost:3000; press Ctrl-C to terminate...");


// eof
