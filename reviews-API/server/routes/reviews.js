const express = require('express');
const router = express.Router();

// GET /reviews/
// Returns a list of reviews for a particular product. This list does not include any reported reviews.
// Response Status: 200 OK
router.get('/', (req, res) => {
  res.status(200).send('get reviews');
});


// POST /reviews
// Adds a review for the given product.
// Reponse Status: 201 CREATED
router.post('/', (req, res) => {
  res.status(201).send('post reviews');
});

module.exports = router;