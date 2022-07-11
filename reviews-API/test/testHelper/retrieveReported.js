const db = require('../.././database/index.js');

const retrieveReported = async (reviewId) => {
  try {
    let result = await db.query(`SELECT reported FROM reviews WHERE review_id=${reviewId}`);
    let status = result.rows[0].reported;
    return status;
  } catch (err) {
    console.log(err);
  }
}

module.exports = retrieveReported;