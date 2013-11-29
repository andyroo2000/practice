/*

Have the function ABCheck(str) take the str parameter being passed and return the string true if the characters a and b are separated by exactly 3 places anywhere in the string at least once (ie. "lane borrowed" would result in true because there is exactly three characters between a and b). Otherwise return the string false. 

Correct Sample Outputs
Input = "after badly"  Output = "false"
Input = "Laura sobs"   Output = "true"

*/

var ABCheck = function(str) {
  var result = false;
  for (var i = 0; i < str.length; i++) {
    if (str[i] === "a") {
      if (str[i + 4] === "b") {
        result = true;
      }
    }
  }
  return result;
};

console.log(ABCheck("after badly"));
console.log(ABCheck("Laura sobs"));
