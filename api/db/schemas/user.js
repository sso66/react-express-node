// File: db/schemas/user.js
// Date: 8/7/2020
// Note: Final Steps to Production

console.log("Type anotating db/schema/user.js...");

var Joi = require('joi');

module.exports = Joi.object().keys({
    // _rev: Joi.string(),
    // _id: Joi.string(),
    email: Joi.string().email().required(),
    username: Joi.string().alphanum().min(3).required(),
    password: Joi.string().regex(/[a-zA-Z0-9]{3,30}/),
    access_token: [Joi.string(), Joi.number()],
    birthyear: Joi.number().integer().min(1900).max((new Date()).getFullYear()),
});

// eof
