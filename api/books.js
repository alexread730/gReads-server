const express = require('express')
const router = express.Router()
const queries = require('../db/book-queries.js');
const knex = require('../db/knex')

function isValid(req, res, next) {
  if (req.body !== "") return next();
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
      // res.json(books);
    });
});

router.get('/:id', (req, res) => {
  queries.getOneBook(req.params.id)
    .then(book => {
      res.json(makeBookArray(book));
    });
});

router.post('/', isValid, (req, res, next) => {
  queries.createBook(req.body)
    .then(books => {
      res.json(books[0]);
    });
});

router.put('/:id', isValid, (req, res) => {
  queries.editBook(req.body, req.params.id)
    .then(books => {
      res.json("Edited Book!");
    });
});

router.delete('/:id', (req, res) => {
  queries.deleteBook(req.body)
    .then(book => {
      res.json("Book Deleted");
    });
});


module.exports = router;
