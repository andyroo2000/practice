/*

Have the function SecondGreatLow(arr) take the array of numbers stored in arr and return the second lowest and second greatest numbers, respectively, separated by a space. For example: if arr contains [7, 7, 12, 98, 106] the output should be 12 98. The array will not be empty and will contain at least 2 numbers. It can get tricky if there's just two numbers! 

Correct Sample Outputs
Input = 1, 42, 42, 180  Output = "42 42"
Input = 4, 90           Output = "90 4"

*/

var sortNumbers = function(arr) {
  arr.sort(function(a, b) {return a - b});
  return arr;
}

var stripDuplicates = function(arr) {
  for (var i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === arr[i -1]) {
      arr.splice(i, 1);
    }
  }
  return arr;
}

var ifTwo = function(arr) {
  if (arr.length === 2) {
    return true;
  }
}

var SecondGreatLow = function(arr) {
  sortNumbers(arr);
  if (ifTwo(arr)) {return arr[1] + " " + arr[0]};
  stripDuplicates(arr);
  if (ifTwo(arr)) {return arr[1] + " " + arr[0]};
  var secondLowest = arr[1];
  var secondHighest = arr[arr.length - 2];
  return secondLowest + " " + secondHighest;
};


console.log(SecondGreatLow([7, 7, 12, 98, 106]));  // 12 98
console.log(SecondGreatLow([1, 42, 42, 180]));     // 42 42
console.log(SecondGreatLow([4, 90]));              // 90 4 


