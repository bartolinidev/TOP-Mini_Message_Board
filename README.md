# The Odin Project > NodeJS Course > Project: Mini Message Board

## ☑️ [Project requirements](https://www.theodinproject.com/lessons/node-path-nodejs-mini-message-board)

## 🔴 [Live demo](https://mini-message-board-pgeu.onrender.com/)

## 🛠️ Tools

[![NodeJS](https://img.shields.io/badge/NODE.JS-5FA04E?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/EXPRESS-0A0A0A?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![EJS](https://img.shields.io/badge/EJS-B4CA65?style=for-the-badge&logo=javascript&logoColor=black)](https://ejs.co/)
[![PostgreSQL](https://img.shields.io/badge/POSTGRESQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Neon](https://img.shields.io/badge/NEON-34D59A?style=for-the-badge&logo=neon&logoColor=black)](https://neon.tech/)
[![Render](https://img.shields.io/badge/RENDER-000000?style=for-the-badge&logo=render&logoColor=white)](https://render.com/)

## 📱 User Interface

This app detects the user's OS color scheme and automatically adjusts.

<p align="center">
  <img src="./public/screenshots/all_screenshot.png" width="300" />
  &nbsp;&nbsp;&nbsp;&nbsp;
  <img src="./public/screenshots/new_screenshot.png" width="300" />
</p>

## ✨ Features

- **Message Board (`/`):** Display all posted messages (user, text, date added)
- **New Message Form (`/new`):** Submit a new message via `POST` request
- **Message Details:** Open a detailed view for each individual message
- **Error Page:** Render a custom 404 page for non-existent routes

## 🎯 Goals

- Create a basic messaging app using Express.js:
  - Use Express Router and controller architecture (MVC pattern)
  - Handle backend form submissions (`POST` requests & `express.urlencoded` middleware)
  - Implement custom error handling and middleware
- Render dynamic views using EJS:
  - Utilize templates and partials via the `include` directive
- Implement PostgreSQL & Advanced Database Features:
  - Integrate PostgreSQL (Neon DB) for persistent data storage using connection pooling (`pg`)
  - Separate data access logic into dedicated query modules (`queries.js`)
  - Implement input validation and sanitization using `express-validator`
  - Set up automated database-level triggers and PL/pgSQL functions for data retention (maintaining a sliding window of the latest 20 messages automatically)

## 📂 Project Structure

```text
TOP-Mini_Message_Board/
├── controllers/
│   ├── getMsgController.js
│   ├── indexController.js
│   └── newMsgController.js
├── db/
│   ├── pool.js
│   ├── populatedb.js
│   └── queries.js
├── public/
│   ├── screenshots/
│   ├── styles/
│   │   ├── global.css
│   │   └── modern-normalize.css
│   └── svg/
├── routes/
│   ├── getMsgRouter.js
│   ├── indexRouter.js
│   └── newMsgRouter.js
├── views/
│   ├── components/
│   ├── 404.ejs
│   ├── index.ejs
│   ├── messageDetails.ejs
│   └── new.ejs
├── .env
├── .gitignore
├── .prettierrc
├── app.js
├── package-lock.json
├── package.json
└── README.md
```

## 🚀 Getting Started

### Installation

```bash
git clone https://github.com/bartolinidev/TOP-Mini_Message_Board.git
cd TOP-Mini_Message_Board
npm install
npm run dev
```

### Inject .env file with your database URL

```env
DATABASE_URL=postgresql://user:password@host:port/database?sslmode=require
```
