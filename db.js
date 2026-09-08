const messages = [
  {
    id: 1,
    text: 'Anyone know what "Lorem ipsum dolor" would be with the Caesar cipher?',
    user: 'Julius Caesar',
    added: new Date(),
  },
  { id: 2, text: 'I have no idea :(', user: 'Charles', added: new Date() },
    {
    id: 3,
    text: 'I know: "Oruhp lsvxp groru"',
    user: 'Amigo',
    added: new Date(),
  },
];

let nextId = 4;

async function getAllMessages() {
  return messages;
}

async function addMessage({ text, user }) {
  const newMessage = {
    id: nextId++,
    text,
    user,
    added: new Date(),
  };
  messages.push(newMessage);
}

async function getMessageById(id) {
  return messages.find((m) => m.id === Number(id));
}

module.exports = {
  messages,
  addMessage,
  getMessageById,
  getAllMessages,
};
