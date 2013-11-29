/*

Have the function WordCount(str) take the str string parameter being passed and return the number of words the string contains (ie. "Never eat shredded wheat" would return 4). Words will be separated by single spaces. 

Correct Sample Outputs
Input = "Hello World"   Output = 2
Input = "one 22 three"  Output = 3

*/

var WordCount = function(str) {
  return str.split(" ").length;
};

console.log(WordCount("Hello World"));               // 2
console.log(WordCount("one 22 three"));              // 3
console.log(WordCount("Never eat shredded wheat"));  // 4
