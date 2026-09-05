const db = require('../db');

const addMessage = async (req, res) => {
  const { user, text } = req.body;

  await db.addMessage({ user, text });

  res.redirect('/');
};

module.exports = { addMessage };
