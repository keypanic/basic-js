const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(input) {
  if(typeof input !== 'string')
    return false;
  tmp_input = parseInt(input.match( /-\d+/g ));
  if(isNaN(tmp_input))
    return false;
  if(tmp_input == 0)
    return false;
  if(tmp_input < 0)
    return false;
  if(MODERN_ACTIVITY < tmp_input)
    return false;
  k = 0.693 / 5730;
  answer = Math.log(MODERN_ACTIVITY / tmp_input) / k; 
  return Math.round(answer, 1);
}; 

 