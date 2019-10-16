const knex = require("../db/knex");

exports.getAllUsers = function(req, res) {
  knex("users").then(users => res.json(users));
};

exports.getOneUser = function(req, res) {
  knex("users")
    .where("id", req.params.id)
    .then(users => res.json(users));
};

exports.addOneUser = function(req, res) {
  knex("users")
    .insert(req.body)
    .returning("*")
    .then(newUser => res.json(newUser));
};

exports.updateOneUser = function(req, res) {
  knex("users")
    .update({
      ...req.body,
      updated_at: new Date()
    })
    .where("id", req.params.id)
    .returning("*")
    .then(updatedUser => res.json(updatedUser));
};

exports.removeOneUser = function(req, res) {
  knex("users")
    .del()
    .where("id", req.params.id)
    .returning("*")
    .then(newUser => res.json(newUser));
};
