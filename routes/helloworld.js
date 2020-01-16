var express = require('express');
var router = express.Router();

/* GET hello world. */
router.get('/', function(req, res, next) {
    res.send('Hello trung dao');
});

router.get('/ecec', function(req, res, next) {
    res.send('Hello ec ec');
});

module.exports = router;
