// File: testApi.js
// Date: 9/1/2020
// Note: To test Node API endpoint API from React UI
//................................................................................
console.log("testAPI.js...");

var express = require('express');
var router = express.Router();
var message = "server pong";

router.get("/", function(req, res, next) {
    res.send(message);
});

module.exports = router;

// eof
