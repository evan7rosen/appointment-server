const { Model } = require("objection");

class Appointment extends Model {
  static get tableName() {
    return "appointments";
  }

  static get relationMappings() {
    const User = require("./User");
    return {
      users: {
        relation: Model.ManyToManyRelation,
        modelClass: User,
        join: {
          from: "appointments.id",
          through: {
            // users_appointments is the join table.
            from: "users_appointments.appt_id",
            to: "users_appointments.user_id"
          },
          to: "users.id"
        }
      }
    };
  }
  static get jsonSchema() {
    return {
      type: "object",
      required: ["time", "location"],

      properties: {
        id: { type: "integer" },
        body: { type: "string" },
        location: { type: "string", minLength: 1, maxLength: 255 }
      }
    };
  }
}

module.exports = Appointment;
