const db = require('../.././database/index.js');

const alterSequence = async (serialName, id) => {
  try {
    await db.query(`ALTER SEQUENCE ${serialName} RESTART WITH ${id};`);
  } catch (err) {
    console.log(err);
  }
  
}

module.exports = alterSequence;