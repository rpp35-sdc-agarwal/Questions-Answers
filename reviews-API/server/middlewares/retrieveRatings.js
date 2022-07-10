const db = require('../../database/index.js');

const retrieveRatings = async (productId) => {
  try {
    let rawData = await db.query(`SELECT rating, COUNT (rating) FROM reviews WHERE reviews.product_id=${productId} GROUP BY rating;`)
    let allRatings = rawData.rows;
    console.log('ratings: ', allRatings);
    let ratings = {};
    for (let i = 0; i < allRatings.length; i++) {
      let currentRating = allRatings[i].rating;
      let currentCount = allRatings[i].count;
      ratings[currentRating] = currentCount;
    }
    return ratings;
  } catch (err) {
    console.log(err);
  }
}

module.exports = retrieveRatings;