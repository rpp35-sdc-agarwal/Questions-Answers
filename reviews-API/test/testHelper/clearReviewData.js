const db = require('../.././database/index.js');
const getLastId = require('./getLastId.js');
const deleteTestData = require('./deleteTestData.js');
const alterSequence = require('./alterSequence.js');

const clearReviewData = (reviewId) => {
  getLastId('reviews', 'review_id')
    .then((reviewId) => {
      console.log('cleared testing review_id: ',reviewId);
      deleteTestData('photos', 'review_id', reviewId)
        .then(() => {
          deleteTestData('characteristics_reviews', 'review_id', reviewId)
            .then(() => {
              deleteTestData('reviews', 'review_id', reviewId)
              .then(() => {
                getLastId('photos', 'id')
                  .then((photoId) => {
                    console.log('cleared testing photo id: ', photoId);
                    alterSequence('review_serial', reviewId);
                    alterSequence('photo_serial', photoId + 1)
                  })
                  .catch((err) => {
                    console.log('error in getting last photo id', err);
                  });
                  
                  getLastId('characteristics_reviews', 'id')
                  .then((characteristicId) => {
                    console.log('cleared testing characteristic_id: ', characteristicId)
                    alterSequence('characteristics_serial', characteristicId + 1);
                  })
                  .catch((err) => {
                    console.log('error in getting last characteristics id', err);
                  })
              })
              .catch((err) => {
                console.log('error in deleting review test data: ', err);
              });
            })
            .catch((err) => {
              console.log('error in deleting characteristics test data: ', err);
            })
        })
        .catch((err) => {
          console.log('error in deleteing photo test data: ', err);
        })
    })
    .catch((err) => {
      console.log('error in getting last review id', err);
    });
    
    
}

module.exports = clearReviewData;