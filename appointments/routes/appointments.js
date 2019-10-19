const express = require("express");
const router = express.Router();
const Appointment = require("../models/Appointment");

// /* GET all appointments */
// router.get("/", appointmentsController.getAllAppointments);
// router.get("/:id", appointmentsController.getOneAppointment);
// router.post("/", appointmentsController.addOneAppointment);
// router.patch("/:id", appointmentsController.updateOneAppointment);
// router.delete("/:id", appointmentsController.removeOneAppointment);

router.get("/", (req, res) => {
  Appointment.query()
    .eager("users")
    .then(result => res.send(result));
});

router.get("/:id", (req, res) => {
  Appointment.query()
    .findById(req.params.id)
    .eager("users")
    .then(result => {
      res.json(result);
    });
});

router.post("/", (req, res) => {
  Appointment.query()
    .insert(req.body)
    .then(result => {
      res.json(result);
    })
    .catch(err => res.json(err));
});

router.patch("/:id", (req, res) => {
  Appointment.query()
    .findById(req.params.id)
    .patch(req.body)
    .returning("*")
    .then(updatedAppt => res.json(updatedAppt));
});

router.delete("/:id", (req, res) => {
  Appointment.query()
    .deleteById(req.params.id)
    .returning("*")
    .then(deletedAppt => res.json(deletedAppt));
});

module.exports = router;
