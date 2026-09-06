const messages = [
  { id: 1, text: 'Hi there!', user: 'Amigo', added: new Date() },
  { id: 2, text: 'Hello World!', user: 'Charles', added: new Date() },
];

let nextId = 3;

async function getAllMessages() {
  return messages;
}

async function addMessage({ text, user }) {
  const newMessage = {
    id: nextId++, // Przypisuje obecną wartość nextId i inkrementuje ją o 1
    text,
    user,
    added: new Date(),
  };
  messages.push(newMessage);
}

async function getMessageById(id) {
  // Pamiętaj o rzutowaniu Number(id), ponieważ req.params.id z URL jest ciągiem znaków (string)
  return messages.find((m) => m.id === Number(id));
}

module.exports = {
  messages,
  addMessage,
  getMessageById,
};
