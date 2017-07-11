const knex = require('./knex');

module.exports = {
  //  Books
  getAllBooks: () => {
    return knex('book');
  }
}
