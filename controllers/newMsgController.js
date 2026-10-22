const db = require('../db/queries');
const { body, validationResult, matchedData } = require('express-validator');

const validateUser = [
  body('text')
    .trim()
    .isLength({ min: 1, max: 280 })
    .withMessage(`Message length must be 1-280`),
  body('user')
    .trim()
    .isLength({ min: 1, max: 30 })
    .withMessage(`Username length must be 1-30`),
];

const addMessage = [
  ...validateUser,
  async (req, res, next) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).render('new', {
          title: 'New Message',
          errors: errors.array(),
          path: '/new',
        });
      }

      const { user, text } = matchedData(req);
      await db.addMessage({ user, text });

      res.redirect('/');
    } catch (err) {
      next(err);
    }
  },
];

module.exports = { addMessage };
