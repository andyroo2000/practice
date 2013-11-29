/*

Have the function SimpleAdding(num) add up all the numbers from 1 to num. For the test cases, the parameter num will be any number from 1 to 1000. 

Correct Sample Outputs
Input = 12 Output = 78
Input = 140 Output = 9870

*/

var SimpleAdding = function(num) {
  if (num ===1 ) return 1;
  return num + SimpleAdding(num - 1);
};

console.log(SimpleAdding(12));
console.log(SimpleAdding(140));
