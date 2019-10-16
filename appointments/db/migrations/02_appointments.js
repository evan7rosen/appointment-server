exports.up = function(knex) {
  return knex.schema.createTable("appointments", function(table) {
    table.increments();
    table.string("name").notNullable();
    table.integer("age");
    table.string("email").notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("appointments");
};
