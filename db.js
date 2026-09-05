const messages = [
  {
    user: 'Amando',
    text: 'Hi there!',
    added: new Date(),
  },
  {
    user: 'Charles',
    text: 'Hello World!',
    added: new Date(),
  },
];

async function getAllMessages() {
  return messages;
}

async function addMessage({ user, text }) {
  messages.push({
    user,
    text,
    added: new Date(),
  });
}

module.exports = {
  getAllMessages,
  addMessage,
};
