// File: realtime_editor_server.js
// Date: 8/19/2020
// Note: Websockets: How to go real-time with Node.js and React.jsx
//..............................................................................
console.log( "Mounting WebSocket realtime_editor_server.js..." );

const webSocketServer = require('websocket').server;
const http = require('http');

// Spin the http server and the websocket server.
const server = http.createServer();
const webSocketsServerPort = 8000;

server.listen(webSocketsServerPort);

const wsServer = new webSocketServer({
    httpServer: server
});


function originIsAllowed(origin) {
    // put logic here to detect whether the specific origin is allowed
    return true;
}

// Generates unique ID for every new connection
const getUniqueID = () => {
    const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    return s4() + s4() + '-' + s4();
};

// Maintaining all active connections - Node.js clients in this object
const clients = {};

// Maintaining all active users in this object
const users = {};

// Maintaining the current editor content in this object
let editorContent = null;

// Maintaining the user activity history
let userActivity = [];

const messageType = {
  USER_EVENT    : "userevent",
  CONTENT_CHANGE: "contentchange"
}

// Sending the current data to all connected clients
const sendMessage = (json) => {

    Object.keys(clients).map((client) => {
        clients[client].sendUTF(json);
    });
}

wsServer.on('request', function(request) {
    var userID = getUniqueID();
    console.log((new Date()) + ' Recieved a new client from origin ' + request.origin + '.'); 
    
    // You can rewrite this part of the code to accept only the requests from allowed origin
    const connection = request.accept(null, request.origin);
    console.log("connection: " + connection);   

    clients[userID] = connection;  
    console.log('connected: ' + userID + ' in ' + Object.getOwnPropertyNames(clients));
  
    connection.on('message', function(event) {
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

            sendMessage(JSON.stringify(json));
        }
    });
    
    // user disconnected on closed connection 
    connection.on('close', function(client) {
        console.log((new Date()) + " Peer " + userID + " disconnected.");

        const json = { type: messageType.USER_EVENT };
        userActivity.push(`${users[userID].username} left the document`);
        json.data = { users, userActivity };
        delete clients[userID];
        delete users[userID];
        
        sendMessage(JSON.stringify(json));
    });
});

// eof
