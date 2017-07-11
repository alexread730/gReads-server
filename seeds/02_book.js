
const books = require('../assets/books.json');
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE book RESTART IDENTITY CASCADE;')
    .then(() => {
      // Inserts seed entries
      return knex('book').insert(books);
    });
};
