const knex = require('./knex');

module.exports = {
  //  Books
  getAllBooks: () => {
    return knex('author_book')
              .join('author', 'author.id', 'author_id')
              .join('book', 'book.id', 'book_id')
              .select('book_id','title', 'genre', 'firstName', 'lastName', 'description', 'cover_url');
  },

  createBook: (book) => {
    return knex('book').insert({
      title: book.title,
      genre: book.genre,
      description: book.description,
      cover_url: book.cover_url
    });
  }
}
