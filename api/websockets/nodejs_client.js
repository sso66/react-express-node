// File: nodejs_client.js
// Date: 8/18/2020
// Note: A simple Node.js client that will print out any utf-8 messages it receives
//        on the console, and periodically sends a random number.

// WebSocket Client & Server Implementation for Node.js
// This code demonstrates a client in Node.js, not in the browser
console.log("\nMounting nodejs_client.js...");

var WebSocketClient = require('websocket').client;
 
var client = new WebSocketClient();
 
client.on('connectFailed', function(error) {
    console.log('Connection Error: ' + error.toString());
});
 
client.on('connect', function(connection) {
    console.log('WebSocket Client Connected');
    connection.on('error', function(error) {
        console.log("Connection Error: " + error.toString());
    });

    connection.on('close', function() {
        console.log('echo-protocol Connection Closed');
    });

    connection.on('message', function(event) {
        if (event.type === 'utf8') {
            console.log("Received: '" + event.utf8Data + "'");
        }
    });
    
    function sendNumber() {
        if (connection.connected) {
            var number = Math.round(Math.random() * 0xFFFFFF);
            connection.sendUTF(number.toString());
            setTimeout(sendNumber, 1000);
        }
    }
    sendNumber();
});
 
client.connect('ws://localhost:8080/', 'echo-protocol');

 
