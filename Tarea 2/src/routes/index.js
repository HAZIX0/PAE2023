const express = require('express');
const newsController = require('./../controllers/news.controller.js');
const router = express.Router();

router.get('/', newsController.showSearchForm);
router.get('/search', newsController.showSearchResults);
module.exports = router;