// controller_test.js

var express = require('express'),
    router = express.Router()

// var Comments = require('../models/comments')
var Comments = require('./model_test')

// Submit a comment
router.post('/submit', function(req, res) {
    Comments.submit(req.session.user._id, req.body.comment, function(err, doc) {
        res.redirect('/all')
    });
});

// Get all comments
router.get('/all', function(req, res) {
    Comments.all(function(err, docs) {
        res.render('comments', {comments: docs})
    });
});

// Get most recent comments
router.get('/recent', function(req, res) {
    Comments.recent(function(err, docs) {
        res.render('comments', {comments: docs})
    });
});

module.exports = router

// eof
