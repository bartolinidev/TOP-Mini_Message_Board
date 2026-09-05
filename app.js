const express = require('express');
const app = express();
const path = require('node:path');
const indexRouter = require('./routes/indexRouter');
const newMsgRouter = require('./routes/newMsgRouter');

// Static paths

const assetsPath = path.join(__dirname, 'public');
app.use(express.static(assetsPath));

// Views

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// Middleware for parsing HTML form data into req.body via POST method
app.use(express.urlencoded({ extended: true }));

// Routes

app.use('/', indexRouter);
app.use('/new', newMsgRouter);

// Port

const PORT = process.env.PORT || 3000;
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`Listening on port ${PORT}!`);
});
