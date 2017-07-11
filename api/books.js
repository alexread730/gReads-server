const express = require('express')
const router = express.Router()
const queries = require('../db/book_queries.js');

function isValidId(req, res, next) {
  if (!isNaN(req.params.id)) return next();
  next(new Error('Invalid ID'));
}

router.get('/books', isValidId, (req, res, next) => {
  queries.getAllBooks()
    .then(books => {
      res.json(books);
    });
});

module.exports = router;
