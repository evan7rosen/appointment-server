const express = require("express");
const bodyParser = require("body-parser");
const port = process.env.PORT || 8000;
const cors = require("cors");
const { Model } = require("objection");

const appointments = require("./routes/appointments");
const users = require("./routes/users");
const knexInstance = require("./db/knex");

Model.knex(knexInstance);

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/appointments", appointments);
app.use("/users", users);

app.listen(port, function() {
  console.log("listening on port: ", port);
});
