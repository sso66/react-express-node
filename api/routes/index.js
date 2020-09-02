console.log("index.js...");

var express = require('express');
var router = express.Router();
var title = "Eagleton-PWA: Homepage Admin!";
var banner = "Real-Time Web Deliverd!";
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: title, banner: banner });
});

module.exports = router;
