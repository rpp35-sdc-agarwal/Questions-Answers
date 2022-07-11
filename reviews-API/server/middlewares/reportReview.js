const db = require('../../database/index.js');

const reportReview = async (reviewId) => {
  try {
    await db.query(`UPDATE reviews SET reported=true WHERE review_id=${reviewId};`)
  } catch (err) {
    console.log(err);
  }
};

module.exports = reportReview;