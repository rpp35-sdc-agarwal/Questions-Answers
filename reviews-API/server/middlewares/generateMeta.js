const db = require('../../database/index.js');
const countRecommend = require('./countRecommend.js');

const generateMeta = async (productId) => {
  let result = {
    product_id: productId.toString(),
  }
  let recommended = await countRecommend(productId);
  result.recommended = recommended
  console.log('meta result: ', result);
};

module.exports = generateMeta;