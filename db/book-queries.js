const knex = require('./knex');

module.exports = {
  //  Books
  getAllBooks: () => {
    return knex('author_book')
              .join('author', 'author.id', 'author_id')
              .join('book', 'book.id', 'book_id')
              .select('book_id','title', 'genre', 'firstName', 'lastName', 'description', 'cover_url');
  }
}
