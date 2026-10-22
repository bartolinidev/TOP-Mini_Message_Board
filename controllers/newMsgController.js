const db = require('../db/queries');

const addMessage = async (req, res) => {
  try {
    const { user, text } = req.body;

    await db.addMessage({ user, text });

    res.redirect('/');
  } catch (err) {
    next(err);
  }
};

module.exports = { addMessage };
