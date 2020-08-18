#!/websockets/bin/env node
// File: connection_server.js
// Date: 8/17/2020
// Note: WebSocket server implementation with 'websocket' NPM

console.log("\nMounting connection_server...");
// List all the connected sessions & communicating with a specific session only.
//
// The WebSocket application developers are expected to keep references to open 
// connections in whatever way make senses for their applicatin. In the useage of
// of developing Real-Time Web (communication/coordination and collabration) 
// applications platform, this involves keeping references to the open connection 
// in the User object and keeping a list of User objects in an active Room object.
// The code will assign an incrementing connection ID to each connection, and keep
// a reference to it in an object (hash) for easy lookup by ID later.

var WebSocketServer = require('websocket').server;
var http = require('http');

// Create list of User objects in an active Room object.
var connections = {};
var connectionIDCounter = 0;

// Create http server
var server = http.createServer(function(request, response) {
    console.log((new Date()) + ' Received request for ' + request.url);
    response.writeHead(404);
    response.end();
});

server.listen(8080, function() {
    console.log((new Date()) + ' Server is listening on port 8080')
});

wsServer = new WebSocketServer({ httpServer: server });

function originIsAllowed(origin) {
    // Put logic here to detect whether the specified origin is allowed.
    return true;
}

wsServer.on('request', function(request) {
    if (!originIsAllowed(request.origin)) {
        // make sure we only keep request from an allowed origin
        request.reject();
        console.log(new Date() + ' Connection from origin ' + request.origin + ' rejected.');
        return;
    }

    var connection = request.accept(null, request.origin);

    // Store a reference to the connection using an incrementing ID
    connection.id = connectionIDCounter++;
    connections[connection.id] = connection;

    // Now you can access the connection with connection[id] and find out
    // the id for a connection with connection.id
    console.log(new Date()) + ' Connection ID ' + connection.id + ' accepted.';

    connection.on('message', function(data) {
        console.log(connection.id)
        broadcast(data.utf8Data);
    });

    connection.on('close', function(reasonCode, description) {
        console.log(new Date()) + ' Peer ' + connection.remoteAddress + ' disconnected ' +
            "Connection ID: " + connection.id;

        // Make sure to remove closed connections from the global pool
        delete connections[connection.id];
    });
});

// Broadcast to all open connections (clients)
function broadcast(data) {
    Object.keys(connections).forEach(function(key) {
        var connection = connections[key];
        
        if (connection.connected) {
            connection.send(data);
        }
    });
}

// Send message to a specific connection (client) by its connectionID
function sendToConnectionId(connectionID, data) {
    var connection = connections[connectionID];
    if (connection && connection.connected) {
        connection.send(data);
    }
}

// eof

