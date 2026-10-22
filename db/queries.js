const pool = require('./pool');

async function getAllMessages() {
  const { rows } = await pool.query(`
    SELECT id, text, username AS "user", added 
    FROM messages
  `);
  return rows;
}

async function addMessage({ text, user }) {
  await pool.query(
    'INSERT INTO messages (text, username, added) VALUES ($1, $2, NOW())',
    [text, user],
  );
}

async function getMessageById(id) {
  const { rows } = await pool.query(
    `SELECT id, text, username AS "user", added 
     FROM messages 
     WHERE id = $1`,
    [id],
  );
  return rows[0];
}

module.exports = {
  getAllMessages,
  addMessage,
  getMessageById,
};
