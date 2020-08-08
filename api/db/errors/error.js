// File: db/errors/errors.js
// Date: 8/7/2020
// Note: Final Steps to Production

var Boom = require('@hapi/boom');

exports.wrapNano = function wrapNanoError(cb) {
    return function(err) {
        if (err) {
            Boom.wrap(err, err.statusCode || 500);
        }
        cb.apply(null, arguments);
    };
}