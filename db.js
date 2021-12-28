const knex = require('knex')({
    client: 'sqlite3',
    connection: {
      filename: "./Modules/Database.sqlite"
    }
  });

(async () => {

    // Create Tables
    const hasUserTable = await knex.schema.hasTable('users');
    if (!hasUserTable) {
      await knex.schema.createTable('users', tableBuilder => {
        tableBuilder.increments();
        tableBuilder.string('telegram_id');
        tableBuilder.string('phone');
        tableBuilder.string('username');        
        tableBuilder.integer('user_type').defaultTo(0);
      });
      console.log('User table created');
    }
  
  })();
  
module.exports = knex;  