const db = require('../../database/index.js');
const submitPhotos = require('./submitPhotos.js');
const submitCharacteristics = require('./submitCharacteristics');

const formatDate = (date = new Date()) => {
  let dateNum = new Date(date).getTime();
  return dateNum;
}

const submitReview = async (review) => {
  if (review.photos && review.photos.length) {
    submitPhotos(review.photos);
  }
  
  let dateNum = formatDate();
  console.log('dateNum: ', dateNum);
  console.log('review: ', typeof review);
  
  try {
    let result = await db.query('INSERT INTO reviews (product_id, rating, date, summary, body, recommend, reviewer_name, reviewer_email) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING review_id;', [review.product_id, review.rating, dateNum, review.summary, review.body, review.recommend, review.reviewer_name, review.reviewer_email]);
    // console.log('returned rewiew id: ', Promise.all(result.rows[0].reivew_id));
    // return await Promise.all(result.rows[0].review_id);
    return result.rows[0].review_id;
  } catch (err) {
    console.log(err);
  }
}

module.exports = submitReview;