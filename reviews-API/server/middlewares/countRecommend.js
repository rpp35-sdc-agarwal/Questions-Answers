const db = require('../../database/index.js');

const countRecommend = async (productId) => {
  let count = {};
  let trueResult = await db.query(`SELECT COUNT (*) FROM reviews WHERE product_id=${productId} AND recommend=true`);
  let yes = trueResult.rows[0].count;
  count.true = yes;
  
  let falseResult = await db.query(`SELECT COUNT (*) FROM reviews WHERE product_id=${productId} AND recommend=false`);
  let no = falseResult.rows[0].count;
  count.false = no;
  // console.log('count: ', count);
  return count;
}

module.exports = countRecommend;