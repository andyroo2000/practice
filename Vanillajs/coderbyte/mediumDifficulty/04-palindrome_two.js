/*

Have the function PalindromeTwo(str) take the str parameter being passed and return the string true if the parameter is a palindrome, (the string is the same forward as it is backward) otherwise return the string false. The parameter entered may have punctuation and symbols but they should not affect whether the string is in fact a palindrome. For example: "Anne, I vote more cars race Rome-to-Vienna" should return true.

Correct Sample Outputs
Input = "Noel - sees Leon"  Output = "true"
Input = "A war at Tarawa!"  Output = "true"

*/

var stripString = function(str) {
  var newString = str.replace(/[^a-zA-Z\w]/g,"");
  return newString.toLowerCase();
};

var PalindromeTwo = function(str) {
  var formattedString = stripString(str);
  for (var i = 0; i < formattedString.length / 2; i++) {
    if (formattedString[i] !== formattedString[formattedString.length - 1 - i]) {
      return false;
    }
    return true;
  }
};


console.log(PalindromeTwo("Anne, I vote more cars race Rome-to-Vienna"));  // true
console.log(PalindromeTwo("Noel - sees Leon"));                            // true
console.log(PalindromeTwo("A war at Tarawa!"));                            // true

console.log(PalindromeTwo("racecars"));                                    // false
console.log(PalindromeTwo("A war at Tarawan"));                            // false
