const express = require('express')
const router = express.Router()
const queries = require('../db/author-queries.js');
const knex = require('../db/knex')

function isValidId(req, res, next) {
  if (!isNaN(req.params.id)) return next();
  next(new Error('Invalid ID'));
}

router.get('/', (req, res) => {
  queries.getAuthors()
    .then(authors => {
      res.json(authors);
    });
});

module.exports = router;
