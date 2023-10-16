function addZoneZero(num){
    if(num<10){ return "0"+num; }
    return num;
  }

function getValidTimestamp(year){
  const date = new Date(`December 31, ${year} 18:59:59`);
  return date.getTime();
}

module.exports = {
    addZoneZero,
    getValidTimestamp
}