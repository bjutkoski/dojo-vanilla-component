const router = require('express').Router();
const homeController = require('./homeController');
const contactController = require('./contactController');

router.get('/home', homeController.home);

router.get('/contact', contactController.home);

module.exports = router;