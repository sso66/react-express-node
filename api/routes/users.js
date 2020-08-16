// File: routes/users.js
// Date: 8/16/2020
// Note: CONCLUSION: Abstract Response Object (Data) Types

/*
 * The question is what do clients (Node.js/React.jsx) want to/from the server (Node.js).
 * It is a message in the form of text or binary dynamic data.
 * The text message can be in plain text hyper-text (HTML/XML) or JSON string format.
 * If it is a binary message, it can be byteArray buffer or blob (binary large objects).
 * 
 * The HTTP is the transer protocol. And, the TCP/IP, UDP and WebSocket are transmission 
 * protocols. Thus, the new WebSocket protocol is to overcome the caveats of the HTTP
 * half-duplex one-way communications. The WebSocket communication protocol is to provide
 * a full-duplex two-way coversation between the client and the server to deliver the 
 * Real-Time Web.
 */
console.log("users.js...");

var express = require('express');
var router = express.Router();

var message = "<h2>This message from user route - The Real-Time Web, Delivered.</h2>";

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(message);
});

module.exports = router;

// eof
