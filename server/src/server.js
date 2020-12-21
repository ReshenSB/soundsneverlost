// Imports
const bodyParser = require('body-parser');
const express = require('express');
const env = require('./environment');

// Environment
const app = express();
const port = env.port | 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/SoundsNeverLost");

// Routes
app.use(require('./routes/youtube.routes'));

// Test API
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
app.get('/', (req, res) => {
  res.send(env)
})

// Start
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})