var express = require('express');
var router = express.Router();

// Require controller modules
var playground_controller = require('../controllers/playgroundcontroller');


/// BOOK ROUTES ///

/* GET catalog home page. */
router.get('/ajaxForm', playground_controller.ajaxForm);
router.get('/searching', playground_controller.searching);


module.exports = router;
