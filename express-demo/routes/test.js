var express = require('express');
var router = express.Router();

router.get('/:id([0-9]+)', (req, res) => {
  const id = req.params.id;
  res.send({
    value: 'Testing OK',
    id
  });
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  res.send({
    value: 'Testing OK',
    id
  });
});

router.get(
  '/:year([0-9]{4})/:month([0-9]{2})/:date([0-9]{2})/:category/:title',
  (req, res) => {
    const year = req.params.year;
    const month = req.params.month;
    const date = req.params.date;
    const category = req.params.category;
    const title = req.params.title;
    res.send({
      year,
      month,
      date,
      category,
      title
    });
  }
);

module.exports = router;
