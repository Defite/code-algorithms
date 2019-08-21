/**
* This also called 'Sock Merchant' or 'Count duplicates in array'
*/

var data = [10, 20, 20, 10, 10, 30, 50, 10, 20, 50];

function countPairs(arr) {
  var counter = 0;
  
  // Sort array
  arr.sort(function(a, b) {
    return a - b;
  });
  
  for (var i = 0; i < data.length - 1; i++) {
    if (arr[i] === arr[i+1]) {
      counter++;
      i++;
    }
  }
  
  return counter; // 3
}

countPairs(data); // 3
