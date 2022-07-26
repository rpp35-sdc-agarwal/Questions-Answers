const express = require('express');
const router = express.Router();
// const bodyParser = require('body-parser');
const retrieveReviews = require('../middlewares/retrieveReviews.js');
const submitReview = require('../middlewares/submitReview.js');

// GET /reviews/
// Returns a list of reviews for a particular product. This list does not include any reported reviews.
// Response Status: 200 OK
router.get('/', async (req, res) => {
  try {
    let productId = req.query.product_id;
    console.log(productId);
    let results = await retrieveReviews(productId);
    console.log('result: ', results);
    let response = {
      product_id: productId,
      results: results
    }
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});


// POST /reviews
// Adds a review for the given product.
// Reponse Status: 201 CREATED
router.post('/', async (req, res) => {
  try {
    // console.log('body', req.body);
    let result = await submitReview(req.body);
    console.log('result: ', result);
    res.status(201).send(JSON.stringify(result));
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

module.exports = router;