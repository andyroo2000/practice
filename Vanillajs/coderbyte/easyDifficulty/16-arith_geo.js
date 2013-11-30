/*

Have the function ArithGeo(arr) take the array of numbers stored in arr and return the string "Arithmetic" if the sequence follows an arithmetic pattern or return "Geometric" if it follows a geometric pattern. If the sequence doesn't follow either pattern return -1. An arithmetic sequence is one where the difference between each of the numbers is consistent, where as in a geometric sequence, each term after the first is multiplied by some constant or common ratio. Arithmetic example: [2, 4, 6, 8] and Geometric example: [2, 6, 18, 54]. Negative numbers may be entered as parameters, 0 will not be entered, and no array will contain all the same elements. 

Correct Sample Outputs
Input = 5,10,15    Output = "Arithmetic"
Input = 2,4,16,24  Output = -1

*/

var isArithmetic = function(index, array) {
  if ((array[index + 1] - array[index]) === (array[index] - array[index - 1])) {
    return true;
  }
};

var isGeometric = function(index, array) {
  if ((array[index + 1] / array[index]) === (array[index] / array[index - 1])) {
    return true;
  }
}

var ArithGeo = function(arr) {
  for (var i = 1; i < arr.length - 1; i++) {
    if (isArithmetic(i, arr)) {
      return "Arithmetic";
    } else if (isGeometric(i, arr)) {
      return "Geometric";
    }
    return "-1";
  }
};

console.log(ArithGeo([5, 10, 15]));         // "Arithmetic"
console.log(ArithGeo([2, 4, 16, 24]));      // -1
console.log(ArithGeo([2, 4, 6, 8]));        // "Arithmetic"
console.log(ArithGeo([2, 6, 18, 54]));      // "Geometric"
