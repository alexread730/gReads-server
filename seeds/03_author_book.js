

const author_book = require('../assets/book_author.json');
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE author_book RESTART IDENTITY CASCADE;')
    .then(() => {
      // Inserts seed entries
      return knex('author_book').insert(author_book);
    });
};
