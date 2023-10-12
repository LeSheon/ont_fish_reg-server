const { addZoneZero } = require("../utils/db_helpers");

  exports.up = async function(knex) {
    
    for(let i=1;i<21;i++){
        await knex.schema.createTable(`ont_zone_${addZoneZero(i)}`, (table) => {
            table.increments('id').primary;
            table.string('species').notNullable();
            table.string('season');
            table.integer('s_limit');
            table.string('s_limit_desc');
            table.integer('c_limit');
            table.string('c_limit_desc');
            table.timestamp('valid_date').notNullable();
            table
                .integer('ont_zone_id')
                .unsigned()
                .references('ont_zone.id')
                .onUpdate('CASCADE')
                .onDelete('CASCADE')
                .notNullable();
        })
    }
  };
  
  exports.down = async function(knex) {
    for(let i=1;i<21;i++) {
        await knex.schema.dropTable(`ont_zone_${addZoneZero(i)}`);
    }
  };
