// File: echo-client.js
// Date: 9/1/2020
// Note: Chat WebSocket client communicating with external echo server
//................................................................................
console.log("Mounting WebSocket echo-client.js...echo.websocket.org-server\n");

const WebSocket = require('ws');

const ws = new WebSocket('wss://echo.websocket.org/', {
    origin: 'https://websocket.org',
});

// Create a duplex stream on connection re: Nodes.js Stream I/O and Buffer I/O
// const duplex = WebSocket.createWebSocketStream(ws, { encoding: 'utf8' });

ws.on('open', function open() {
    console.log('connected');
    // sending message to the server (external in this case)
    ws.send(Date.now());
});

ws.on('close', function close() {
    console.log('disconnected');
});

ws.on('message', function incoming(data) {
    // receiving anything (data) being echo back from the server
    console.log(`Roundtrip time: ${Date.now() - data} ms`);

    // console.log("\nUse the Node.js streams API");
    // duplex.pipe(process.stdout);
    // process.stdin.pipe(duplex);

    // sending delayed messages to the server every half-a-second period
    setTimeout(function timeout() {
        ws.send(Date.now());
    }, 500)
});


 



// eof
