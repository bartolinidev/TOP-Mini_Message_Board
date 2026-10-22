#! /usr/bin/env node
require('dotenv').config();
const { Client } = require('pg');

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  text VARCHAR ( 280 ),
  username VARCHAR ( 30 ),
  added TIMESTAMP DEFAULT NOW()
);

INSERT INTO messages (text, username, added) 
VALUES
  ('Anyone know what "Lorem ipsum dolor" would be with the Caesar cipher?', 'Julius', NOW()),
  ('I have no idea :(', 'Charles', NOW()),
  ('I know: "Oruhp lsvxp groru"', 'Amigo', NOW());
`;

async function main() {
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });
  try {
    console.log('Seeding...');
    await client.connect();
    await client.query(SQL);
    console.log('Done');
  } catch (e) {
    console.error('Error seeding db', e);
  } finally {
    await client.end();
  }
}

main();
