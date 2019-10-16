const knex = require("../db/knex");

exports.getAllAppointments = function(req, res) {
  knex("appointments").then(appointments => res.json(appointments));
};

exports.getOneAppointment = function(req, res) {
  knex("appointments")
    .where("id", req.params.id)
    .then(appointments => res.json(appointments));
};

exports.addOneAppointment = function(req, res) {
  knex("appointments")
    .insert(req.body)
    .returning("*")
    .then(newAppointment => res.json(newAppointment));
};

exports.updateOneAppointment = function(req, res) {
  knex("appointments")
    .update({
      ...req.body,
      updated_at: new Date()
    })
    .where("id", req.params.id)
    .returning("*")
    .then(updatedAppointment => res.json(updatedAppointment));
};

exports.removeOneAppointment = function(req, res) {
  knex("appointments")
    .del()
    .where("id", req.params.id)
    .returning("*")
    .then(newAppointment => res.json(newAppointment));
};
