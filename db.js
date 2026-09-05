const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
  },
];

async function getAllMessages() {
  return messages;
}

async function addMessage({ text, user }) {
  messages.push({
    text,
    user,
    added: new Date(),
  });
}

module.exports = {
  getAllMessages,
  addMessage,
};
