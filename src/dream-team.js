const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) { 
  array = [];
  if(!Array.isArray(members))
    return false;
  members.forEach(name => {
    if(typeof name != 'string') 
      return false;
    array.push(name);
  });
  let incrypt = [];
  array.forEach(name => {
    incrypt.push(name.trim().toUpperCase()[0]);
  });
  return Object.values(incrypt.sort()).join('');
};
