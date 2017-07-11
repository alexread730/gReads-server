
exports.up = function(knex, Promise) {
  return knex.schema.createTable('book', table => {
    table.increments('id').primary();
    table.text('title').notNull();
    table.text('genre').notNull();
    table.text('description').notNull();
    table.text('cover_url').notNull();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('book')
};
