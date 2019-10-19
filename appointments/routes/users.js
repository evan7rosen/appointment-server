const express = require("express");
const router = express.Router();
const User = require("../models/User");

/* GET all users */
// router.get("/", usersController.getAllUsers);
// router.get("/:id", usersController.getOneUser);
// router.post("/", usersController.addOneUser);
// router.patch("/:id", usersController.updateOneUser);
// router.delete("/:id", usersController.removeOneUser);

router.get("/", (req, res) => {
  User.query()
    .eager("appointments")
    .then(result => res.send(result));
});

router.get("/:id", (req, res) => {
  User.query()
    .findById(req.params.id)
    .eager("appointments")
    .then(result => res.json(result));
});

router.post("/", (req, res) => {
  User.query()
    .insert(req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err));
});

router.patch("/:id", (req, res) => {
  User.query()
    .findById(req.params.id)
    .patch(req.body)
    .returning("*")
    .then(updatedUser => res.json(updatedUser));
});

router.delete("/:id", (req, res) => {
  User.query()
    .deleteById(req.params.id)
    .returning("*")
    .then(deletedUser => res.json(deletedUser));
});

module.exports = router;
