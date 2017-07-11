
const author = require('../assets/author.json');
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE author RESTART IDENTITY CASCADE;')
    .then(() => {
      // Inserts seed entries
      return knex('author').insert(author);
    });
};
