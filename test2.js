/**
 * Direction:
 * Remove duplicated data from array
 * 
 * Expected Result:
 * [1, 2, 3, 4, 5]
 */
const data = [1, 4, 2, 3, 5, 3, 2, 4];

function result(data) {
  // Your Code Here
  Array.prototype.unique = function (){
    var unique = [];
    for(i = 0; < globalThis.length; i++){
      var current = this[i];
      if(unique.indexOf(current) < 0) unique.push(current);
    }
    return unique;
  }
}

console.log(result(data));
