const knex = require('./knex');

module.exports = {

  createAuthorBook: (author_book) => {
    return knex('author_book').insert(author_book);
  }
}
