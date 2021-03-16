
module.exports = function towelSort (matrix) {
  if(matrix === undefined) {return [];}
  let toggle = true;
  let rezultArray = [];
  matrix.forEach(element => {
    rezultArray = toggle ?  rezultArray.concat(element) : rezultArray.concat(element.reverse());
    toggle = !toggle;
  });  
  return rezultArray;
}
