// File: nodejs_socket_server.js
// Date: 8/21/2020
// Note: Node.js TCP/IP Socket Server

console.log("\nMounting nodejs_socket_server.js...\n");
// The users can be any type of clients, like a web browser, 
// mobile app, IoT device, Node.js client or anything knows
// TCP.

// You need to serve assets to your users over HTTP, but also
// need to provide them with streams for bi-directional messaging.
// It is to acomplish this in a single Node.js app!

const net = require('net');

// Create a server object
const server = net.createServer((socket) => {
    socket.on('data', (data) => {
      console.log(data.toString());
    });
  
    socket.write('SERVER: Hello! This is server speaking.\n');
    socket.end('SERVER: Closing connection now.\n');
  }).on('error', (err) => {
    console.error(err);
  });
  
  // Open server on port 9898
  server.listen(9898, () => {
    console.log('opened server on', server.address().port);
  });

// This script reuns a Node.js socket server on port 9898. Whenever a client
// connects to this server app (IP_ADDRESS: 9898) the server sends the client
// a string over the open socket. It says "SERVER: Hello! This is server
// speaking." Whenever the clinet sends some data to the server, the Node.js
// script logs the contents in the 'data' event handler.
 

// eof
