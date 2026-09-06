const { Router } = require('express');
const indexRouter = Router();
const db = require('../db');

// GET /
indexRouter.get('/', async (req, res) => {
  const messages = await db.getAllMessages();
  res.render('index', {
    messages: messages,
    path: '/',
    title: 'Mini Message Board',
  });
});

module.exports = indexRouter;
