/*

Have the function ExOh(str) take the str parameter being passed and return the string true if there is an equal number of x's and o's, otherwise return the string false. Only these two letters will be entered in the string, no punctuation or numbers. For example: if str is "xooxxxxooxo" then the output should return false because there are 6 x's and 5 o's. 

Correct Sample Outputs
Input = "xooxxo"  Output = "true"
Input = "x"       Output = "false"

*/

var ExOh = function(str) {
  xTotal = 0;
  yTotal = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] === "x") {
      xTotal++;
    } else {
      yTotal++;
    }
  }
  if (xTotal === yTotal) {
    return true;
  } else {
    return false;
  }
};

console.log(ExOh("xooxxo"));       // true
console.log(ExOh("x"));            // false
console.log(ExOh("xooxxxxooxo"));  // false
