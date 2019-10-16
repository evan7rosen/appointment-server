const express = require("express");
const router = express.Router();
const usersController = require("../controllers/users");

/* GET all users */
router.get("/", usersController.getAllUsers);
router.get("/:id", usersController.getOneUser);
router.post("/", usersController.addOneUser);
router.patch("/:id", usersController.updateOneUser);
router.delete("/:id", usersController.removeOneUser);

module.exports = router;
