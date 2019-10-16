exports.up = function(knex) {
  return knex.schema.createTable("appointments", function(table) {
    table.increments();
    table.string("title").notNullable();
    table.string("body").notNullable();
    table.string("location").notNullable();
    table.boolean("completed").notNullable();
    table
      .integer("user_id")
      .references("id")
      .inTable("users");
    table
      .integer("guest_id")
      .references("id")
      .inTable("users");
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {};
