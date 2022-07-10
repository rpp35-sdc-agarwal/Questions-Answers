const db = require('../../database/index.js');

const retrieveCharacteristics = async (productId) => {
  let data = {};
  let allCharacteristics = await db.query(`SELECT a.characteristic_id, a.value, c.name AS characteristics
  FROM characteristics_reviews a
  LEFT JOIN characteristics c ON a.characteristic_id=c.id
  LEFT JOIN reviews r ON r.review_id=a.review_id WHERE r.product_id=${productId};`);
  let result = allCharacteristics.rows;
  // console.log('characteristics: ', result);
  for (let i = 0; i < result.length; i++) {
    let currentName = result[i].characteristics;
    let currentId = result[i].characteristic_id;
    let currentValue = result[i].value;
    if (!data[currentName]) {
      data[currentName] = {
        id: currentId,
        count: 1,
        value: 0
      }
      data[currentName].total = currentValue;
    } else {
      data[currentName].count += 1;
      data[currentName].total += currentValue
    }
  }
  for (let keys in data) {
    data[keys].value = (data[keys].total / data[keys].count).toFixed(4);
    delete data[keys].total;
    delete data[keys].count;
  }
  // console.log('characteristics data: ', data);
  return data;
}
  
module.exports = retrieveCharacteristics;

/*
SELECT a.characteristic_id, a.value, c.name AS characteristics
FROM characteristics_reviews a
LEFT JOIN characteristics c ON a.characteristic_id=c.id
LEFT JOIN reviews r ON r.review_id=a.review_id WHERE r.product_id=${productId};
*/