const Pool = require('pg').Pool;

///////////////////////////////
// LOCAL DATABASE CONNECTION //
///////////////////////////////

// const pool = new Pool({
//   user: 'caixiuqi',
//   password: 'PASSWORD',
//   database: 'reviews',
//   host: 'localhost',
//   port: 5432
// })

/////////////////////////////////
// AWS RDS DATABASE CONNECTION //
/////////////////////////////////

const pool = new Pool({
  user: 'postgres',
  password: 'PASSWORD',
  database: 'reviews_API',
  host: 'sdc-reviews-postgres.cnq3t56crzzg.us-west-2.rds.amazonaws.com',
  port: 5432
})

/////////////////////////////////
// AWS EC2 DATABASE CONNECTION //
/////////////////////////////////

// const pool = new Pool({
//   user: 'postgres',
//   password: 'PASSWORD',
//   database: 'postgres',
//   host: '54.218.163.60',
//   port: 5432
// })

module.exports = pool;