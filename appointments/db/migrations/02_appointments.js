exports.up = function(knex) {
  return knex.schema.createTable("appointments", function(table) {
    table.increments();
    table.string("title").notNullable();
    table.string("body").notNullable();
    table.string("location").notNullable();
    table.string("time").notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {};
