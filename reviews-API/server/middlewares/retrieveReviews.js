const db = require('../../database/index.js');
const retrievePhotos = require('./retrievePhotos.js');

const formatDate = (dateNum) => {
  let date = new Date(dateNum);
  return date;
}
const retrieveReviews = async (productId) => {
  try {
    let allReviews = await db.query(`SELECT * FROM reviews WHERE product_id=${productId}`);

    let result = await Promise.all(allReviews.rows.map(async (review) => {
        review.date = formatDate(Number(review.date));
        review.photos = await retrievePhotos(review.review_id);
        delete review.product_id;
        return review;
    }))
    
    let filteredResult = result.filter((review) => {
      return !review.reported;
    })
    
    return filteredResult;
  } catch (err) {
    console.log(err);
  }
}

module.exports = retrieveReviews;

