const db = require('../db/queries');

const indexController = async (req, res, next) => {
  try {
    const messages = await db.getAllMessages();
    res.render('index', {
      messages: messages,
      path: '/',
      title: 'Mini Message Board',
    });
  } catch (err) {
    next(err);
  }
};

module.exports = indexController;
