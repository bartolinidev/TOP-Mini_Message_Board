const { Router } = require('express');
const getMsgRouter = Router();
const getMessage = require('../controllers/getMsgController');

// GET /messages/:id
getMsgRouter.get('/:id', getMessage);

module.exports = getMsgRouter;
