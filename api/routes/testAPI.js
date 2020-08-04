// File: testApi.js
// Date: 7/27/2020
// Note: Node.js Module

console.log("testAPI.js...");

var express = require('express');
var router = express.Router();

router.get("/", function(req, res, next) {
    res.send("SVG & React.jsx Component API to Node.js Express API is working properly...ready for CouchDB API");
});

module.exports = router;

// eof
