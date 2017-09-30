/*
* Task: Given an array a that contains only numbers in the range from 1 to a.length, 
* find the first duplicate number for which the second occurrence has the minimal index.
* If there are more than 1 duplicated numbers, 
* return the number for which the second occurrence has a smaller index 
* than the second occurrence of the other number does. If there are no such elements, return -1.
*/

var test = [2, 3, 3, 1, 5, 2];

function firstDuplicate(a) {
  var someObj = {};

  for(var i = 0; i < a.length; i++) {
    if(someObj[a[i]] !== undefined) {
       return a[i];
    } else {
       someObj[a[i]] = i;
    }
  }
  return -1;
}

console.log(firstDuplicate(test)); // 3
