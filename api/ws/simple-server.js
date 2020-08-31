// File: simple-server.js
// Date: 8/30/2020
// Note: Simple Node.js server sending and receiving text data

console.log("Mounting simple-server.js\n");

const WebSocket = require('ws');
const wss = new WebSocket.Server({ port:3030 });

wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {
        console.log('received from client said: %s', message);
    });

    ws.send('something')
});
// eof
