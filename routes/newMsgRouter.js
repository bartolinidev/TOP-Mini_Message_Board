const { Router } = require('express');
const newMsgRouter = Router();
const { addMessage } = require('../controllers/newMsgController');

// GET /new
newMsgRouter.get('/', (req, res) =>
  res.render('new', { title: 'Create new message', path: '/new' }),
);

// POST /new
newMsgRouter.post('/', addMessage);

module.exports = newMsgRouter;
