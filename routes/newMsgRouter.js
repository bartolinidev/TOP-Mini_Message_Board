const { Router } = require('express');
const newMsgRouter = Router();

// GET /new
newMsgRouter.get('/', (req, res) => res.send('New message creator'));

// POST /new
newMsgRouter.post('/', (req, res) => res.send('New message sent!'));

module.exports = newMsgRouter;
