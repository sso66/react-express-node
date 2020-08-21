// File: nodejs_socket_client.js
// Date: 8/21/2020
// Note: Node.js TCP/IP WebSocket Server

console.log("\nMounting nodejs_websocket_server.js...\n");

const http = require('http');
const WebSocketServer = require('websocket').server;

const server = http.createServer();
server.listen(9898);

const wsServer = new WebSocketServer({
    httpServer: server
});

wsServer.on('request', function(request) {
    const connection = request.accept(null, request.origin);

    connection.on('message', function(message) {
      console.log('Received Message:', message.utf8Data);
      connection.sendUTF('Hi this is Node.js WebSocket server!');
    });
    connection.on('close', function(reasonCode, description) {
        console.log('Client has been disconnected.');
    });
})

// This code uses the Node.js native "http" package module library and 3rd party
// WebSocket NPM to create a standard WebSocket server. It has the same functionality as 
// the nodejs_socket_server.js. Here this script is using the standard WebSocket protocol
// to bi-directionally send and receive data between the client(s) and the server.


// eof
