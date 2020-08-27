var express = require('express');
var router = express.Router();

/* GET cantonese_steg page. */
router.get('/', function(req, res, next) {
  res.render('cantonese_steg', { title: 'Good for you.' });
});

module.exports = router;
