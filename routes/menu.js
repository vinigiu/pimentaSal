var express = require('express');
var router = express.Router();
const menuController = require('../controllers/menuController');

router.get('/:id', menuController.details)

module.exports = router;