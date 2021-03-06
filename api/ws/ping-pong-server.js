// File: ping-pong-server.js
// Date: 8/31/2020
// Note: Pings and Pongs: The Heartbeat of WebSockets
//................................................................................
// How to detect and close broken connections?
console.log("Mounting WebSocket ping-pong-server.js...PORT:8080\n");

//--------------------------------------------------------------------------------
// ___ Algorithm @ abstract ___
// 1. At anypoint after the handshake connection, the client or the 
// the server can choose to send a ping to other party.
//
// 2. When the ping is received, the reciepient must send back a pong as soon as
// possible.
//
// 3. You can make sure that the client is still connected, for example.
//
// ___ Algorithm: @ interface ___
// 1. A ping or pong is just a regular frame, but it's a control frame (not data
// frame).
//
// 2. Pongs have an opcode of 0x9 (octal unit notation) and pongs have an opcode
// of 0xA (octal unit notation).
// 
// 3. When you get a ping, send back a pong with the exact same Payload Data as 
// the ping (for pings and the pongs the maximun payload length is 125).
//
// 4. You might also get (receive) a pong without ever sending, ignore ths if it
// happen.
//
// If you have gotten (received) more than one ping before (previous) you get a
// chance to send a pong, you send only one pong.
//--------------------------------------------------------------------------------
const WebSocket = require('ws');

function noop() {} // empty function object (no operation)

function heartbeat() {
    console.log("pong!")
    this.isAlive = true;    // state of WebSocket class object
}

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', function connection(ws) {  // Agenda 1.
    ws.isAlive = true;  // state of the instance of WebSocket class object
    ws.on('pong', heartbeat);   // Agenda 2.
});  

const interval = setInterval(function ping() {
    wss.clients.forEach(function each(ws) {
        if (ws.isAlive === false) return ws.terminate();

        ws.isAlive = false;
        ws.ping(noop);
    });
}, 3000);

wss.on('close', function(close) {
    clearInterval(interval);
});

// eof
