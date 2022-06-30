const express = require('express');
const app = express();
const db = require('../database/index.js');
const reviews = require('./routes/reviews.js');

app.use(express.json()); // for using req.body
app.use('/reviews', reviews);

// GET /reviews/meta
// Returns review metadata for a given product
// Response Status: 200 OK

// PUT /reviews/:review_id/helpful
// Updates a review to show it was found helpful.
// Reponse Status: 204 NO CONTENT

// PUT /reviews/:review_id/report
// Updates a review to show it was reported. Note, this action does not delete the review, but the review will not be returned in the above GET request.
// Reponse Status: 204 NO CONTENT

app.get('/', function (req, res) {
  res.status(200).send('Hello World')
})




module.exports = app;