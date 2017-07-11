
exports.up = function(knex, Promise) {
  return knex.schema.createTable('author_book', table => {
    table.increments('id').primary();
    table.integer('author_id').unsigned().references('id').inTable('author').onDelete('cascade');
    table.integer('book_id').unsigned().references('id').inTable('book').onDelete('cascade');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('author_book')
};
