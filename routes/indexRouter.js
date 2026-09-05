const { Router } = require('express');
const indexRouter = Router();

// GET /
indexRouter.get('/', (req, res) => res.send('Homepage'));

// Catch-all (Custom 404)
indexRouter.get('/{*splat}', (req, res) => {
  res.status(404).send('Page not found (404)');
});

module.exports = indexRouter;
