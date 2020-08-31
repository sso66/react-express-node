// File: ping-pong-client.js
// Date: 8/31/2020
// Note: Pings and Pongs: The Heartbeat of WebSockets
//................................................................................
// How to detect and close broken connections?
//
// Sometimes the link between the server and the client can be interrupted in a 
// way that keeps both the server the client unaware of the broken state of the
// connection (e.g. when pulling the cord).
// 
// In these cases ping messages can be used as means to verify that the remote
// endpoint is responsive (is till alive?).
console.log("Mounting WebSocket ping-pong-client.js...PORT:8080\n");

const WebSocket = require('ws');

function heartbeat() {
    console.log("ping")
    clearTimeout(this.pingTimeout);
}

// Use `WebSocket#terminate()`, which immediately destroys the connection
// instead of `WebSocket#close()`, which waits for the close timer.
// Delay should be equal to interval at which your servr sends out pings
// plus a conservative assumption of the latency.
this.pingTimeout = setTimeout(() => {
    this.delete;
}, 30000 + 1000);

const client = new WebSocket('ws://localhost:8080/');

client.on('open', heartbeat);           // Agenda 1
client.on('ping', heartbeat);           // Agenda 2
client.on('close', function clear() {   // Agenda 1
    clearTimeout(this.pingTimeout);     // Agenda 2
});
// eof


