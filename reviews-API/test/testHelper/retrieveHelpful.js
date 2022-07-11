const db = require('../.././database/index.js');

const retrieveHelpful = async (reviewId) => {
  try {
    let result = await db.query(`SELECT helpfulness FROM reviews WHERE review_id=${reviewId}`);
    let count = result.rows[0].helpfulness;
    return count;
  } catch (err) {
    console.log(err);
  }
  
}

module.exports = retrieveHelpful;