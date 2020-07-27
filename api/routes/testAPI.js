// File: testApi.js
// Date: 7/27/2020
// Note: Node.js Module

var express = require('express');
var router = express.Router();

router.get("/", function(req, res, next) {
    res.send("Node.js Express API is working properly");
});

module.exports = router;

// eof
