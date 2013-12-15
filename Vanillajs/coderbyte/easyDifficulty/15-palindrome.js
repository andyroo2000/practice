/*

Have the function Palindrome(str) take the str parameter being passed and return the string true if the parameter is a palindrome, (the string is the same forward as it is backward) otherwise return the string false. For example: "racecar" is also "racecar" backwards. Punctuation and numbers will not be part of the string. 

Correct Sample Outputs
Input = "never odd or even"  Output = "true"
Input = "eye"                Output = "true"

*/

var Palindrome = function(str) {
  var str = str.split(" ").join("");
  for (var i = 0; i < str.length/2 i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false
    }
    return true;
  }
};

console.log(Palindrome("never odd or even"));    // true
console.log(Palindrome("eye"));                  // true
console.log(Palindrome("racecar"));              // true
console.log(Palindrome("racecars"));             // false
