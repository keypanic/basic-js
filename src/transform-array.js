const CustomError = require("../extensions/custom-error");

const [dis_next, dis_prev, 
  double_next, double_prev ] = 
  [ '--discard-next', '--discard-prev',  
    '--double-next', '--double-prev' ]; 
const words = [dis_next, dis_prev, double_next, double_prev ];

module.exports = function transform(arr) {
  if(!arr && !arr.length > 0 )
    return arr; 
  tmp_arr = Array.from(arr); 
  arr.forEach(item => {
    words.forEach(action => {
      if(item == action) {  
        index = tmp_arr.indexOf(action);
        tmp_arr.splice(tmp_arr.indexOf(action), 1); // delete action
        modify_arr(tmp_arr, action, index);
      }
    });
  });
  return tmp_arr.filter(x => x != -1);
}

function modify_arr(arr, action, index) {
  switch(action) {
    case dis_next: 
      if((index + 1) >= arr.length) break;
      arr.splice(index, 1, -1); // replace value to delete later 
      break;
    case dis_prev: 
      if((index - 1) < 0) break;
      arr.splice(index - 1, 1, -1); // replace value to delete later 
      break;
    case double_next:
      if((index) >= arr.length) break;
      arr.splice(index, 0, arr[index]);
      break;
    case double_prev:
      if((index - 1) < 0) break;
      arr.splice(index, 0, arr[index - 1]);
      break;
  }
  return arr;
}