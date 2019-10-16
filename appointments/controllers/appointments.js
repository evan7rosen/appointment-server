const knex = require("../db/knex");

exports.getAllBooks = function(req, res) {
  // With Knex Raw
  // knex.raw(`SELECT * from books`).then(books => res.json(books.rows))
  // With Knex query builder - long hand
  // knex
  //   .select()
  //   .table('books')
  //   .then(books => res.json(books))

  // With Knex query builder - short hand
  knex("books").then(books => res.json(books));
};

exports.getOneBook = function(req, res) {
  // With Knex Raw
  // knex.raw(`SELECT * from books WHERE id = ${req.params.id}`).then(book => res.json(book.rows))

  // With Knex query builder
  // knex
  //   .select()
  //   .table('books')
  //   .where('id', req.params.id)
  //   .then(book => res.json(book))

  // With Knex query builder - short hand
  knex("books")
    .where("id", req.params.id)
    .then(books => res.json(books));
};

exports.addOneBook = function(req, res) {
  // With Knex Raw
  // knex.raw(
  //  `INSERT INTO books (title, author, pages, genre_id) VALUES ('${req.body.title}', '${req.body.author}', ${req.body.pages}, ${genre_id})`
  //  )

  // With Knex query builder
  knex("books")
    .insert(req.body)
    .returning("*")
    .then(newBook => res.json(newBook));
};

exports.updateOneBook = function(req, res) {
  // With Knex Raw
  // knex.raw(
  //  `UPDATE books SET title = '${req.body.title}', author = '${req.body.author}', pages = ${req.body.pages}, genre_id = ${genre_id}) WHERE id = ${req.params.id}`
  //  )

  // With Knex query builder
  knex("books")
    .update({
      ...req.body,
      updated_at: new Date()
    })
    .where("id", req.params.id)
    .returning("*")
    .then(updatedBook => res.json(updatedBook));
};

exports.removeOneBook = function(req, res) {
  // With Knex Raw
  // knex.raw(
  //  `DELETE FROM books WHERE id = ${req.params.id}`
  // )

  // With Knex query builder
  knex("books")
    .del()
    .where("id", req.params.id)
    .returning("*")
    .then(newBook => res.json(newBook));
};
