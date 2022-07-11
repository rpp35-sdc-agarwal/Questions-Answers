const db = require('../.././database/index.js');

const restoreHelpful = async (reviewId) => {
  try {
    await db.query(`UPDATE reviews SET helpfulness = helpfulness - 1 WHERE review_id=${reviewId};`);
  } catch (err) {
    console.log(err);
  }
}

module.exports = restoreHelpful;