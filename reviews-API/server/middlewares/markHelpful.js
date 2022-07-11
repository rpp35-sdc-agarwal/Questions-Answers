const db = require('../../database/index.js');

const markHelpful = async (reviewId) => {
  try {
    await db.query(`UPDATE reviews SET helpfulness = helpfulness + 1 WHERE review_id=${reviewId};`);
  } catch (err) {
    console.log(err);
  }
}

module.exports = markHelpful;