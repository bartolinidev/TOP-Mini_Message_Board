const db = require('../db/queries');

const getMessage = async (req, res, next) => {
  try {
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
  } catch (err) {
    next(err);
  }
};

module.exports = getMessage;
