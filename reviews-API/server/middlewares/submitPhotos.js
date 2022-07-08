const db = require('../../database/index.js');

const submitPhotos = (reviewId, photos) => {
  photos.forEach((url) => {
    db.query('INSERT INTO photos (review_id, url) VALUES ($1, $2)', [reviewId, url])
  })
}

module.exports = submitPhotos;