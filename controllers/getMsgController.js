const db = require('../db');

const getMessage = async (req, res) => {
  const { id } = req.params;
  const message = await db.getMessageById(id);

  if (!message) {
    return res
      .status(404)
      .render('404', { title: 'Message Not Found', path: '' });
  }

  res.render('messageDetails', {
    title: 'Message Details',
    message: message,
    path: '',
  });
};

module.exports = getMessage;
