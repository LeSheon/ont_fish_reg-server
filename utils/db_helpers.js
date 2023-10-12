function addZoneZero(num){
    if(num<10){
      return "0"+num;
    }

    return num;
  }

function getValidTimestamp(year){
  const date = new Date(`December 17, ${year} 23:59:59`);

  return date.getMilliseconds();
}

module.exports = {
    addZoneZero,
    getValidTimestamp
}