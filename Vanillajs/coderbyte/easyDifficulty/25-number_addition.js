/*

Have the function NumberSearch(str) take the str parameter, search for all the numbers in the string, add them together, then return that final number. For example: if str is "88Hello 3World!" the output should be 91. You will have to differentiate between single digit numbers and multiple digit numbers like in the example above. So "55Hello" and "5Hello 5" should return two different answers. Each string will contain at least one letter or symbol.

Correct Sample Outputs
Input = "75Number9"          Output = 84
Input = "10 2One Number*1*"  Output = 13

*/

var NumberSearch = function(str) {
  var strArray = str.split(/[^0-9]/);
  var sum = 0;
  var number = 0;
  for (var i = 0; i < strArray.length; i++) {
    if ((/[0-9]/).test(strArray[i])) {
      number = Number(strArray[i]);
      sum += number;
    }
  }
  return sum;
};


console.log(NumberSearch("88Hello 3World!"));    // 91
console.log(NumberSearch("55Hello"));            // 55
console.log(NumberSearch("5Hello 5"));           // 10
console.log(NumberSearch("75Number9"));          // 84
console.log(NumberSearch("10 2One Number*1*"));  // 13

