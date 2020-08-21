// File: nodejs_socket_client.js
// Date: 8/21/2020
// Note: Node.js TCP/IP Socket Client

console.log("\nMounting nodejs_socket_client.js...\n");

const net = require('net');

// Connect to a server @ port 9898
const client = net.createConnection({ port: 9898 }, () => {
  console.log('CLIENT: I have been connected to the server.');
  // Sending data to server
  client.write('CLIENT: Hello this is client!');
});

// Receiving data from server
client.on('data', (data) => {
  console.log(data.toString());
  client.end();
});

client.on('end', () => {
  console.log('CLIENT: I have been disconnected from the server.');
});

// The client scripts attempts to connect to the localhost:9898. If the
// connection succeeds, then the clinent sends a string to the server 
// over the open socket. It says "CLIENT: Hello this is client!" 
// Whenever the server sends some data to the client, the client logs
// the contents in the 'data' event handler.


// eof
