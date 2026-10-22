const db = require('../db/queries');

const indexController = async (req, res) => {
  const messages = await db.getAllMessages();
  res.render('index', {
    messages: messages,
    path: '/',
    title: 'Mini Message Board',
  });
};

module.exports = indexController;
