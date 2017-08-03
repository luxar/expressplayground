var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});
/* GET users listing. */
router.get('/cool', function (req, res, next) {
  res.send('you are cool');
});
router.get('/:userId/books/:bookId', function (req, res) {
  // Access userId via: req.params.userId
  // Access bookId via: req.params.bookId
  res.send(req.params)
})
module.exports = router;
