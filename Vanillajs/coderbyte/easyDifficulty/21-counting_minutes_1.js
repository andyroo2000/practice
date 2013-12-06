/*

Have the function CountingMinutesI(str) take the str parameter being passed which will be two times (each properly formatted with a colon and am or pm) separated by a hyphen and return the total number of minutes between the two times. The time will be in a 12 hour clock format. For example: if str is 9:00am-10:00am then the output should be 60. If str is 1:00pm-11:00am the output should be 1320. 

Correct Sample Outputs
Input = "12:30pm-12:00am"  Output = 690
Input = "1:23am-1:08am"    Output = 1425

*/

var CountingMinutesI = function(str) {
  var strArray = str.split("-");
  var time1 = strArray[0];
  var time2 = strArray[1];

  function getMinutes(time) {
    var strArraySplit = time.split(":");
    var multiplier = Number(strArraySplit[0]);
    var length = time.length;
    var amPm = (time[length - 2]);
    var minutes = Number((strArraySplit[1]).slice(0,2));

    if ((amPm === "p" ) && (multiplier !== 12)) {
      multiplier += 12;
    }
    if ((amPm === "a") && (multiplier === 12)) {
      multiplier -= 12;
    }
    return (multiplier * 60) + minutes;
  }
    if ((getMinutes(time1)) > (getMinutes(time2))) {
      return ((24 * 60) - getMinutes(time1) + getMinutes(time2));
    } 
    return getMinutes(time2) - getMinutes(time1);
};


console.log(CountingMinutesI("9:00am-10:00am"));   // 60
console.log(CountingMinutesI("1:00pm-11:00am"));   // 1320
console.log(CountingMinutesI("12:30pm-12:00am"));  // 690
console.log(CountingMinutesI("1:23am-1:08am"));    // 1425
