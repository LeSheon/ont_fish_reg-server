
  exports.up = async function(knex) {
    
    for(let i=1;i<21;i++){
        await knex.schema.createTable(`ont_zone_${addZero(i)}`, (table) => {
            table.increments('id').primary;
            table.string('species').notNullable();
            table.string('season').notNullable();
            table.integer('s_limit').notNullable();
            table.integer('c_limit').notNullable();
            table.date('valid_date').notNullable();
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
        await knex.schema.dropTable(`ont_zone_${addZero(i)}`);
    }
  };

  function addZero(num){
    if(num<10){
      return "0"+num;
    }

    return num;
  }
