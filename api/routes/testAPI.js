// File: testApi.js
// Date: 7/27/2020
// Note: Express Node.js Module

console.log("testAPI.js...");

var express = require('express');
var router = express.Router();
var message = "...ready for CouchDB API"

router.get("/", function(req, res, next) {
    res.send("SVG & React.jsx Component API to Node.js Express API is working properly" + message);
});

module.exports = router;

// eof
