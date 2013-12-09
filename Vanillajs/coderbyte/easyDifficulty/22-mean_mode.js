/*
Have the function MeanMode(arr) take the array of numbers stored in arr and return 1 if the mode equals the mean, 0 if they don't equal each other (ie. [5, 3, 3, 3, 1] should return 1 because the mode (3) equals the mean (3)). The array will not be empty, will only contain positive integers, and will not contain more than one mode.

Correct Sample Outputs
Input = 1, 2, 3        Output = 0
Input = 4, 4, 4, 6, 2  Output = 1
*/

var getMean = function(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

var getMode = function(arr) {
  arr.sort(function(a, b) { return a - b });
  var currentNumberCount = 0;
  var highestCount = 0;
  var result = 0;
  for (var i = 0; i < arr.length; i++) {
    currentNumberCount++;
    if ((arr[i] !== arr[i + 1]) && (currentNumberCount > highestCount)) {
      highestCount = currentNumberCount;
      result = arr[i];
      currentNumberCount = 0;
    }
  }
  return result;
};

var MeanMode = function(arr) {
  if (getMean(arr) === getMode(arr)) {
    return 1;
  }
  return 0;
};

console.log(MeanMode([5, 3, 3, 3, 1]));   // 1
console.log(MeanMode([1, 2, 3]));         // 0
console.log(MeanMode([4, 4, 4, 6, 2]));   // 1
