const db = require('../.././database/index.js');

const deleteTestData = async (table, idName, idVal) => {
  try {
    await db.query(`DELETE FROM ${table} where ${idName}=${idVal};`);
  } catch (err) {
    console.log(err);
  }
}

module.exports = deleteTestData;