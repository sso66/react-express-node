// File: realtime_editor_server.js
// Date: 8/19/2020
// Note: Websockets: How to go real-time with Node.js and React.jsx
//..............................................................................
console.log( "Mounting WebSocket realtime_editor_server.js..." );

// JWS JSON Web Token JWS-data is served over a single TCP socket connection
// Agenda 1. WebSocket establishes a handshake between server and client 

const webSocketServer = require('websocket').server;
const http = require('http');

// Spin off the http server and the websocket server
const server = http.createServer();
const webSocketsServerPort = 8000;

server.listen(webSocketsServerPort);

const wsServer = new webSocketServer({
    httpServer: server
});

// Check for CORS (Cross-Origin Resource Sharing)
function originIsAllowed(origin) {
    // put logic here to detect whether the specific origin is allowed
    return true;
}

// Maintain all active connections in this object
const clients = {};

// Generate unique ID for every new connection
const getUniqueID = () => {
    const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    return s4() + s4() + '-' + s4();
};

// Maintain all active users in this object
const users = {};

// Maintain the current editor content in this object
const editorContent = null;

// Maintain the user activity history in this list object
const userActivity = [];

// Maintain the connections from allowed origin in this object
const connections = [];

const messageType = {
  USER_EVENT    : "userevent",
  CONTENT_CHANGE: "contentchange"
}

// Send current JWT data to all connected clients
const sendMessage = (json) => {
    Object.keys(clients).map((client) => {
        clients[client].sendUTF(json);
    });
}

// Accept the handshake on receiving the request form the client
wsServer.on('request', function(request) {
    var userID = getUniqueID();
    console.log((new Date()) + ' Recieved a new client from origin ' + request.origin + '.'); 
    
    // Rewrite this part of the code to accept only the requests from allowed origin
    const connection =  request.accept(null, request.origin);
    connections.push(connection);
    console.log("allowed origin: #" + connections.length);

    clients[userID] = connection;  
    console.log('connected: ' + userID + ' in ' + Object.getOwnPropertyNames(clients));
  
    connection.on('message', function(event) {
        // receive assorted type of data packets from clients
        if (event.type === 'utf8') {
            const dataFromClient = JSON.parse(event.utf8Data);
            const json = { type: dataFromClient.type };

            if (dataFromClient.type === messageType.USER_EVENT) {
                users[userID] = dataFromClient;
                userActivity.push(`${dataFromClient.username} joined to edit the document`);
                json.data = { users, userActivity };
            } else if (dataFromClient.type === messageType.CONTENT_CHANGE) {
                editorContent = dataFromClient.content;
                json.data = { editorContent, userActivity };
            }
            
            // send JSON Web Token data to clients
            sendMessage(JSON.stringify(json));
        }
    });
    
    // user disconnected on closed connection 
    connection.on('close', function(reasonCode, description) {
        console.log((new Date()) + " Peer " + userID + " disconnected.");

        const json = { type: messageType.USER_EVENT };
        userActivity.push(`${users[userID].username} left the document editor`);
        json.data = { users, userActivity };
        delete clients[userID];
        delete users[userID];

        // send message to all clients
        sendMessage(JSON.stringify(json));

        let index = connections.indexOf(this);
        connections.splice(index, 1);
        console.log((new Date()) + ' Peer ' + connection.remoteAddress 
                        + 'allowed origin # ' + index + ' disconnected ');
    });
});

// eof
