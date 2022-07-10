const db = require('../../database/index.js');

const retrievePhotos = async (reviewId) => {
  
  let allPhotos = await db.query(`SELECT * FROM photos WHERE review_id=${reviewId};`);
  let result = allPhotos.rows;
  if (result.length) {
    result.forEach((photo) => {
      delete photo.review_id;
    })
  }
  // console.log('photos: ', result);
  return result;
}

module.exports = retrievePhotos;