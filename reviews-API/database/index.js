const Pool = require('pg').Pool;

// const pool = new Pool({
//   user: 'caixiuqi',
//   password: 'PASSWORD',
//   database: 'reviews',
//   host: 'localhost',
//   port: 5432
// })

const pool = new Pool({
  user: 'postgres',
  password: 'PASSWORD',
  database: 'reviews_API',
  host: 'sdc-reviews-postgres.cnq3t56crzzg.us-west-2.rds.amazonaws.com',
  port: 5432
})

module.exports = pool;