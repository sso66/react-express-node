// File: db/schemas/index.js
// Date: 8/7/2020
// Note: Final Steps to Production

const Joi = require('joi');
const Boom = require('@hapi/boom');

console.log("Type anotating db/schema/index.js...");

var schemaNames = ['user'];
var schemas = {};

schemaNames.forEach(function(schemaName) {
    schemas[schemaName] = require('./' + schemaName);
});

exports.validate = validate;

function validate(doc, schema, cb) {
    if (typeof schema == 'string') {
        schema = schemas[schema];
    }

    if (!schema) {
        cb(new Error('Unknown schema'));
    }
    else {
        Joi.validate(doc, schema, cb);
    }
};

exports.validating = function validating(schemaName, fn) {
    var schema = schemas[schema];
    if (!schema) {
        throw new Error('Unknown Schema ' + schemaName);
    }

    return function(doc, cb) {
        validate(doc, schema, function(err, doc) {
            if (err) {
                // Wrapping errors is generally betten than replace them:
                // this we don't lose context infomation that may be helpful
                // for debugging a server or client problem.
                Boom.wrap(err, 400);
                cb(err);
            }
            else {
                fn.call(null, doc, cb);
            }
        });
    };
};

// eof
