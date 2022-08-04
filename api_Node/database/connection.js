//DATABASE CONNECTION
var knex = require('knex')({
    client: 'mysql2',
    connection: {
      host : 'localhost',
      user : 'root',
      password : '',
      database : 'api_movies'
    }
  });

module.exports = knex