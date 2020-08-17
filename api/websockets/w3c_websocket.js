// File:w3c_websocket_client.js
// Date: 8/17/2020
// Note: WebSocket server implementation with 'websocket' NPM

console.log("Mounting w3c_websocket.js...\n\n");
// A simple Node.js client using W3C WebSocket API with echo-protocol.

const W3CWebSocket = require('websocket').w3cwebsocket;
const client = new W3CWebSocket('ws://localhost:8080/', 'echo-protocol')

client.onopen = function() {
    console.log('WebSocket Client Connected');

    function sendNumber() {
        if (client.readyState === client.OPEN) {
            var number = Math.round(Math.random() * 0xFFFFFF);
            client.send(number.toString());
            setTimeout(sendNumber, 1000);
        }
    }
    sendNumber();
};

client.onclose = function(event) {
    console.log('echo-protocol Client Closed - ' 
        + ' CODE: '
        + event.code  
        + ' | REASON: '
        + event.reason 
        + ' | WAS_CLEAN: '
        + event.wasClean);
};

client.onmessage = function(event) {
    if (typeof event.data === 'string') {
        console.log("Received: '" + event.data + "'");
    }
};

// eof
