/*

Problem 1
Multiples of 3 and 5


If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.

*/

var answer = function(num) {

  var resultArr = [];

  var isMultipleOf = function(num, multiple) {
    if (num % multiple === 0) {
      return true;
    }
    return false;
  };

  var testAndPushToArr = function(num) {
    if ((isMultipleOf(num, 3) || (isMultipleOf(num, 5)))) {
      resultArr.push(num);
    }
  }

  var populateResultArr = function(num) {
    for (var i = 1; i < num; i++) {
      testAndPushToArr(i);
    }
    return resultArr;
  };

  var sum = function(arr) {
    result = 0;
    for (var i = 0; i < arr.length; i++) {
      result += arr[i];
    }
    return result;
  };

  populateResultArr(num);
  sum(resultArr);
  return result;
}

console.log(answer(1000));
