const { Router } = require('express');
const indexRouter = Router();
const db = require('../db');

// GET /
indexRouter.get('/', async (req, res) => {
  const messages = await db.getAllMessages();
  res.render('index', { messages: messages });
});

// Catch-all (Custom 404)
indexRouter.get('/{*splat}', (req, res) => {
  res.status(404).send('Page not found (404)');
});

module.exports = indexRouter;
