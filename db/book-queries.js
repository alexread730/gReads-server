const knex = require('./knex');

module.exports = {

  getOneBook: (id) => {
      return knex('book').where('book.id', id).first();
  },

  getAllBooks: () => {
    return knex('author_book')
              .join('author', 'author.id', 'author_id')
              .join('book', 'book.id', 'book_id')
              .select('book_id','title', 'genre', 'firstName', 'lastName', 'description', 'cover_url');
    // return knex('book');
  },

  createBook: (book) => {
    return knex('book').insert({
              title: book.title,
              genre: book.genre,
              description: book.description,
              cover_url: book.cover_url
            }, "id");
  },
  editBook: (book, id) => {
    return knex('book').where('book.id', id).update({
              title: book.title,
              genre: book.genre,
              description: book.description,
              cover_url: book.cover_url
            });
  },

  deleteBook: (bookId) => {
      return knex('book').where('book.id', bookId.id).del();
  }
}
