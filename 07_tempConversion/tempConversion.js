const ftoc = function(fTemp) {
let newfTemp = (fTemp-32)*(5/9);
newfTemp = Math.round(newfTemp * 10) / 10
return newfTemp;
};

const ctof = function(cTemp) {
  let newcTemp = ((cTemp)*(9/5))+32;
  newcTemp = Math.round(newcTemp * 10) / 10
  return newcTemp;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
