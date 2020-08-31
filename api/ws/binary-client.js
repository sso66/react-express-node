// File: simple-client.js
// Date: 8/30/2020
// Note: Simple Node.js client sending and receiving text data

console.log("Mounting binary-client.js\n");

const URL = 'ws://localhost:3030/';
const WebSocket = require('ws');
const ws = new WebSocket(URL);

ws.on('open', function open() {
    const array = new Float32Array(5);

    for (var i = 0; i <array.length; ++i) {
        array[i] = i / 2;
    }

    ws.send(array);
});
// eof