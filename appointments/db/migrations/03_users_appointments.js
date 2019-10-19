exports.up = function(knex) {
  return knex.schema.createTable("users_appointments", function(table) {
    table.increments();
    table
      .integer("user_id")
      .references("id")
      .inTable("users");
    table
      .integer("appt_id")
      .references("id")
      .inTable("appointments");
  });
};

exports.down = function(knex, Promise) {};
