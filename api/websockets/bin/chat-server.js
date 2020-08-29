// File: chat-server.js
// Date: 8/29/2020
// Note: Simple WebSocket server implemented with 'ws' NPM
//................................................................................
console.log("Mounting WebSocket chat-server.js...\n");

class Clients {
    constructor() {
        this.clientList = {};
        this.saveClient = this.saveClient.bind(this);
    }

    saveClient(username, client) {
        this.clientList[username] = client;
    }
}

// Create WebSocket server that transmit all messages to everyone that's connected.
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 3030 });

// console.log("Reserved for creating WebSocket JSON Web Token - JWT clients...");
const clients = new Clients();

wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(msg) {
        // keep track of clients with WebSocket connections
        const parsedMsg = JSON.parse(msg); 
        clients.saveClient(parsedMsg, ws);

        const stringifyMsg = JSON.stringify(parsedMsg);
        console.log('stringifyMsg: ' + stringifyMsg);

        wss.clients.forEach(function each(client) {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                // BROADCAST: On each incoming messages it sends it back 
				// to all connected clients.
                client.send(msg);
                
                // UNICAST: On each incoming messages it sends it back 
				// to specific connected client with user id.
                // clients.clientList[ws].send();
            }
        })
    });   
});

// eof
