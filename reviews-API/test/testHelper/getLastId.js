const db = require('../.././database/index.js');

const getLastId = async (table, idName) => {
  try {
    let rows = await db.query(`SELECT ${idName} FROM ${table} ORDER BY ${idName} DESC LIMIT 1;`);
    let id = await rows.rows[0][idName];
    return id;
  } catch (err) {
    console.log(err);
  }
}

module.exports = getLastId;