// File: api/helloWorld-express.js
// Date: 8/10/2020
// Note: Servicing/Routing/Resourcing/Rendering
// Pattern: Communication/Activation/Navigation/Projection

console.log("Mounting helloWorld-express.js");

var express = require('express');
var path = require('path');

var app = express();

app.set('port', process.env.PORT | 3000);

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

app.get('/', function(req, res) {
    res.type('text/plain');
    res.send('Home: Eagleton IWA');
    // res.render('home');
});

app.get('/about', function(req, res) {
    res.type('text/plain');
    res.send('About: Eagleton IWA');
    // res.render('about');
});

// custom 404 page
// app.use(function(req, res) {
app.use(function(req, res, next) {
res.type('text/plain');
    res.status(404);
    res.send('404 - Not Found');
    // res.render('404 - Not Found');
});

// custom 500 page
app.use(function(req, res, next) {
    console.error(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500 - Server Error');
    // res.render('500 - Server Error');
});

app.listen(app.get('port'), function() {
    console.log('Express started on http://localhost:' + 
    app.get('port') + '; press Ctrl-C to terminate.');
});

// eof