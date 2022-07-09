const db = require('../../database/index.js');

const retrieveCharacteristics = async (reviewId) => {
  
  let allCharacteristics = await db.query(`SELECT * FROM characteristics_reviews WHERE review_id=${reviewId}`);
  let result = allPhotos.rows;
  if (result.length) {
    result.forEach((photo) => {
      delete photo.review_id;
    })
  }
  console.log('characteristics: ', result);
  return result;
}

module.exports = retrieveCharacteristics;