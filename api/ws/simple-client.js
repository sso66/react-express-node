// File: simple-client.js
// Date: 8/30/2020
// Note: Simple Node.js client sending and receiving text data

console.log("Mounting simple-client.js...\n");

const URL = 'ws://localhost:3030/';
const WebSocket = require('ws');
const ws = new WebSocket(URL);

ws.on('open', function open() {
    ws.send('something');
});

ws.on('message', function incoming(data) {
    console.log('received from server said: %s', data);

})

// eof
