const express = require('express');
const router = express.Router();
const retrieveReviews = require('../middlewares/retrieveReviews.js');

// GET /reviews/
// Returns a list of reviews for a particular product. This list does not include any reported reviews.
// Response Status: 200 OK
router.get('/', async (req, res) => {
  try {
    let productId = req.query.product_id;
    console.log(productId);
    let results = await retrieveReviews(productId);
    // console.log('result: ', results);
    let response = {
      product_id: productId,
      results: [...results]
    }
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
  }
  
});


// POST /reviews
// Adds a review for the given product.
// Reponse Status: 201 CREATED
router.post('/', (req, res) => {
  res.status(201).send('post reviews');
});

module.exports = router;