const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if(!date)
    return 'Unable to determine the time of year!'; 
  if(!date instanceof Date)
    throw new Error();
  months = {
    SUMMER : "summer",
    AUTUMN : "autumn",
    WINTER : "winter",
    SPRING : "spring"
  }
  switch(date.getMonth()) {
    case 0:
    case 1:
    case 11:
    case 12:
      return months.WINTER;
    case 2:
    case 3:
    case 4:
      return months.SPRING;
    case 5:
    case 6:
    case 7:
      return months.SUMMER;
    case 8:
    case 9:
    case 10:
      return months.AUTUMN;
    default:
      return "Unable to determine the time of year!";
  }  
};
