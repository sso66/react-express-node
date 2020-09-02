// File: testApi.js
// Date: 9/1/2020
// Note: Test endpoint to Node API
//................................................................................
console.log("testAPI.js...");

var express = require('express');
var router = express.Router();
var message = "React UI connect to Node API";

router.get("/", function(req, res, next) {
    res.send(message);
});

module.exports = router;

// eof
