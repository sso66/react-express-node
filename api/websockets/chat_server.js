// File: chat_server.js
// Date: 8/17/2020
// Note: WebSocket server implementedc with ws NPM

console.log("Mounting WebSocket chat_server.js...\n");

const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 3030 });

wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(data) {
        wss.clients.forEach(function each(client) {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(data);
            }
        })
    });
});

// eof
