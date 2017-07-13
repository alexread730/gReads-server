const express = require('express')
const router = express.Router()
const queries = require('../db/author-book-queries.js');
const knex = require('../db/knex')

router.post('/', (req, res, next) => {
  queries.createAuthorBook(req.body)
    .then(books => {
      res.json(books[0]);
    });
});

module.exports = router;
