const db = require('../../database/index.js');

const submitCharacteristics = (reviewId, scores) => {
  // scores.forEach((characteristic) => {
  //   db.query('INSERT INTO photos (review_id, url) VALUES ($1, $2)', [reviewId, url])
  // })
  
  for (let keys in scores) {
    db.query('INSERT INTO characteristics_reviews (characteristic_id, review_id, value) VALUES ($1, $2, $3)', [Number(keys), reviewId, scores[keys]])
  }
}

module.exports = submitCharacteristics;