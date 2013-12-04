/*

Have the function DivisionStringified(num1,num2) take both parameters being passed, divide num1 by num2, and return the result as a string with properly formatted commas. If an answer is only 3 digits long, return the number with no commas (ie. 2 / 3 should output "1"). For example: if num1 is 123456789 and num2 is 10000 the output should be "12,345".

Correct Sample Outputs
Input = 5 & num2 = 2      Output = "3"
Input = 6874 & num2 = 67  Output = "103"

*/

var DivisionStringified = function(num1, num2) {
  var unformattedResultArr =  Math.round(num1 / num2).toString().split("");
  var length = unformattedResultArr.length;
  if (length > 3) {
    for (var i = length - 3; i > 0; i -= 3) {
      unformattedResultArr.splice([i], 0, ",");
    }
  }
  return unformattedResultArr.join("");
};


console.log(DivisionStringified(5, 2));             // 3
console.log(DivisionStringified(2, 3));             // 1
console.log(DivisionStringified(6874, 67));         // 103
console.log(DivisionStringified(123456789, 10000)); // 12,345
console.log(DivisionStringified(2000000, 1));       // 2,000,000
