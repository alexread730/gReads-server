const knex = require('./knex');

module.exports = {

  getAuthors: () => {
    return knex('author');
  }
}
