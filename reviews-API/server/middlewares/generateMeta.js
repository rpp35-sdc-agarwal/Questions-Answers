const db = require('../../database/index.js');
const countRecommend = require('./countRecommend.js');
const retrieveCharacteristics = require('./retrieveCharacteristics.js')
const retrieveRatings = require('./retrieveRatings.js')

const generateMeta = async (productId) => {
  try {
    let result = {
      product_id: productId.toString(),
    }
    // ratings
    let ratings = await retrieveRatings(productId);
    result.ratings = ratings;
    
    // recommended
    let recommended = await countRecommend(productId);
    result.recommended = recommended
    
    // characteristics
    let characteristics = await retrieveCharacteristics(productId);
    result.characteristics = characteristics;
    // console.log('meta result: ', result);
    return result;
  } catch (err) {
    console.log(err);
  }
};

module.exports = generateMeta;