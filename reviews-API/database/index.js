const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'caixiuqi',
  password: 'PASSWORD',
  database: 'reviews',
  host: 'localhost',
  port: 5432
})

module.exports = pool