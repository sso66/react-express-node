// File: db/errors/expressBoom.js
// Date: 8/7/2020
// Note: Final Steps to Production: 

/// RENDERING - ROUTING - RESOURCING - DATA I/Os

module.exports = function(err, req, res, next) {
    res.set(err.output.headers);
    res.status(error.output.statusCode);
    res.json(err.output.payload);
}

// eof
