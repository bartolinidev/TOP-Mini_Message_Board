const { Router } = require('express');
const newMsgRouter = Router();
const { addMessage } = require('../controllers/newMsgController');

// GET /new
newMsgRouter.get('/', (req, res) => res.send('New message creator'));

// POST /new
newMsgRouter.post('/', addMessage);

module.exports = newMsgRouter;
