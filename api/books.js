const express = require('express')
const router = express.Router()
const queries = require('../db/book-queries.js');
const knex = require('../db/knex')

function isValidId(req, res, next) {
  if (!isNaN(req.params.id)) return next();
  next(new Error('Invalid ID'));
}

function makeBookArray(books) {
  const collectionOfBooks = [];
  const booksWithAuthors = {};
  books.forEach(book => {
    if (!booksWithAuthors[book.book_id]) {
      const bookInstance = {
        id: book.book_id,
        title: book.title,
        authors: [],
        genre: book.genre,
        description: book.description,
        cover_url: book.cover_url
      };
      collectionOfBooks.push(bookInstance);
      booksWithAuthors[book.book_id] = bookInstance;
    }
    booksWithAuthors[book.book_id].authors.push({
      firstName: book.firstName,
      lastName: book.lastName
    })
  })
  return collectionOfBooks;
}

router.get('/', (req, res) => {
  queries.getAllBooks()
    .then(books => {
      res.json(makeBookArray(books));
    });
});


module.exports = router;
