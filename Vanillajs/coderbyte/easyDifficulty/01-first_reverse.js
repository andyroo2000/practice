/*

Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order. 

Correct Sample Outputs
Input = "coderbyte"Output = "etybredoc"
Input = "I Love Code"Output = "edoC evoL I"

*/


var FirstReverse = function(str) {
  var theSplit = str.split("");
  return theSplit.reverse().join("");
}

console.log(FirstReverse("coderbyte"));
