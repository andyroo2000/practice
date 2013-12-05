/*

Have the function DashInsert(num) insert dashes ('-') between each two odd numbers in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd number. 

Correct Sample Outputs
Input = 99946  Output = "9-9-946"
Input = 56730  Output = "567-30"

*/

var DashInsert = function(num) {
  var numArray = num.toString().split("");
  for (var i = numArray.length - 1; i > 0; i--) {
    if ( (numArray[i] % 2 !== 0) && (numArray[i - 1] % 2 !== 0) ) {
      numArray.splice(i, 0, "-");
    }
  }
  return numArray.join("");
};


console.log(DashInsert(454793));  // 4547-9-3
console.log(DashInsert(99946));   // 9-9-946
console.log(DashInsert(56730));   // 567-30
