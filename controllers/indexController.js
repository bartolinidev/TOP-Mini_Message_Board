const db = require('../db');

const indexController = async (req, res) => {
  const messages = await db.getAllMessages();
  res.render('index', {
    messages: messages,
    path: '/',
    title: 'Mini Message Board',
  });
};

module.exports = indexController;
