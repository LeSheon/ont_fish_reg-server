
exports.up = function(knex) {
  return knex.schema.createTable('ont_zone', (table) => {
    table.increments('id').primary;
    table.string('zone').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('ont_zone');
};
