const { Router } = require('express');
const indexRouter = Router();
const indexController = require('../controllers/indexController');

// GET /
indexRouter.get('/', indexController);

module.exports = indexRouter;
