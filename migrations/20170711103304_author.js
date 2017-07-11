
exports.up = function(knex, Promise) {
  return knex.schema.createTable('author', table => {
    table.increments('id').primary();
    table.text('firstName').notNull();
    table.text('lastName').notNull();
    table.text('bio').notNull();
    table.text('portrait_url').notNull();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('author')
};
