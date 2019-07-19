var express = require('express');
var router = express.Router();
const db = require('../db/database');

/* GET users listing. */
router.get('/', async function(req, res, next) {
  res.send(await db.get());
});

// We need body-parser package for this to work
router.post('/register', function(request, response) {
  db.create(request.body);
  response.send('Processed');
});

module.exports = router;
