const { addZoneZero, getValidTimestamp } = require("../utils/db_helpers");
const zoneData = [require("./seed_data/zone_01.json"), require("./seed_data/zone_02.json")
,require("./seed_data/zone_03.json"), require("./seed_data/zone_04.json"), require("./seed_data/zone_05.json")
,require("./seed_data/zone_06.json"),require("./seed_data/zone_07.json")
,require("./seed_data/zone_08.json"),require("./seed_data/zone_09.json")
,require("./seed_data/zone_10.json"),require("./seed_data/zone_11.json")
,require("./seed_data/zone_12.json"),require("./seed_data/zone_13.json")
,require("./seed_data/zone_14.json"),require("./seed_data/zone_15.json")
,require("./seed_data/zone_16.json"),require("./seed_data/zone_17.json")
,require("./seed_data/zone_18.json"),require("./seed_data/zone_19.json")
,require("./seed_data/zone_20.json")];

exports.seed = async function(knex) {
  // Deletes ALL existing entries

  for(let i=1;i<21;i++){
    knex(`zone_${addZoneZero(i)}`).del();
  }

  for(let i=1;i<21;i++){

    let currentZoneData = zoneData[i-1];
    for(let l=0;l<currentZoneData.length;l++){
      currentZoneData[l] = {...currentZoneData[l], valid_year: "Valid for 2023", ont_zone_id: i}
    }

    await knex(`zone_${addZoneZero(i)}`).insert(currentZoneData);
  }
};
