/*

Have the function ArrayAdditionI(arr) take the array of numbers stored in arr and return the string true if any combination of numbers in the array can be added up to equal the largest number in the array, otherwise return the string false. For example: if arr contains [4, 6, 23, 10, 1, 3] the output should return true because 4 + 6 + 10 + 3 = 23. The array will not be empty, will not contain all the same elements, and may contain negative numbers. 

Input = 5,7,16,1,2   Output = "false"
Input = 3,5,-1,8,12  Output = "true"

*/

var ArrayAdditionI = function(arr) {
  arr.sort(function(a, b) {return a - b});
  largestNumber = arr.pop();
  return arr + ": " + largestNumber;
  for (var i = 0; i < arr.length; i++) {
    /* arr i */
    
  }
};



console.log(ArrayAdditionI([5, 7, 16, 1, 2]));   // false
console.log(ArrayAdditionI([3, 5, -1, 8, 12]));  // true
console.log(ArrayAdditionI([4, 6, 23, 10, 1, 3]));  // true
