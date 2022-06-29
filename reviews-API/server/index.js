const express = require('express');
const app = express();
const db = require('../database/index.js');

app.use(express.json()); // for using req.body

app.get('/', function (req, res) {
  res.status(200).send('Hello World')
})

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});