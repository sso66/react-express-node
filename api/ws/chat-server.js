// File: chat-server.js
// Date: 8/29/2020
// Note: Chat WebSocket server implemented with 3rd party 'ws' NPM
//................................................................................
console.log("Mounting WebSocket chat-server.js...PORT:3030\n");

// How to keep track of clients with WebSocket object?
// With the introduction of HTML5, Websockets developers can leverage a 
// lightweight, yet powerful, two-way communication model between client and 
// server.

// Communication initiated from the server is a new addition in this model. The
// server no longer simply responding HTTP requests. 

// Taking into consideration the client only needs to communicate with a single 
// address, the server now needs to keep track of open socket connections in a 
// way that allows it to initiate communications with the proper client(s).

// One way to acomplishing this is with to label each open socket connection with
// a unique data point commonly shared between server and client.
class Clients {
    constructor() {
        this.clientList = {};
        this.saveClient = this.saveClient.bind(this);
    }

    saveClient(username, client) {
        this.clientList[username] = client;
    }
}
// The "Clients" object above stores all open socket connection objects with 
// their respective usernames as a key/value pair.

// The server relies on an intital message from the client with a username.
//
// Upon the connection and first message, the 'clients' instance store the 
// client object as value of the username key:

const WebSocket = require('ws');
const server = new WebSocket.Server({ port: 3030 });
const clients = new Clients();

// Keep track of clients with WebSocket connection 
server.on('connection', function connection(websocket) {
    // Receive message from client
    websocket.on('message', function incoming(msg) {
        const parsedMsg = JSON.parse(msg); 
        clients.saveClient(parsedMsg, websocket);
        
        console.log('Receive and display specific client and a message:');
        const stringifyMsg = JSON.stringify(parsedMsg);
        console.log('JSON.stringify Msg: ' + stringifyMsg + '\n');

        server.clients.forEach(function each(client) {
            // A client WebSocket broadcasting to all connect WebSocket clients, 
            // including itself.
            // if (client.readyState === WebSocket.OPEN) {
            //     client.send(msg);
            // }
            // // A client WebSocket broadcasting to every other connected WebSocket 
            // clients, exluding itself.
            if (client !== websocket && client.readyState === WebSocket.OPEN) {
                // On each incoming messages it sends it back  to all connected 
                // clients in general.
                client.send(msg);
                
                // On each incoming messages it sends it back to specific 
                // connected client with username as identity.
                // clients.clientList[ws].send();
            }
        })
    });   
});

// Multiple clients can be stored and grouped for simple or complex applications
// and can be easily retrieved for intitiating messages to clietn(s) in an 
// intuitive way:
//
// clients.clientList['JSmith1234'].send();


// eof
