// route_test.js

var express = require('express'),
    router = express.Router()

var db = require('./resource_test')

// Submit a comment
router.post('/submit', function(req, res) {
    var data = {
        _id: (new Date().toJSON()) + ':' + req.session.user._id,
        message: req.body.comment,
    }

    db.save('comments', data, function(err, doc) {
        res.redirect('/all')
    })
});

// Get all comments
router.get('/all', function(req, res) {
  db.all('comments', {}, function(err, data) {
        res.render('comments', {comments: data.rows})
    })
});

// Get most recent comments
router.get('/recent', function(req, res) {
  db.all('comments', {limit: 20, descending: true}, function(err, data) {
        res.render('comments', {comments: data.rows})
    })
});

module.exports = router