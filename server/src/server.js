// Imports
var bodyParser = require('body-parser');
const express = require('express');

// Environment
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/SoundsNeverLost");

// Routes
app.use(require('./routes/youtube.routes'));

// Test API
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Start
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})