/**
* Task find max sum continious subarray
* https://en.wikipedia.org/wiki/Maximum_subarray_problem
*/

function getMaxSumSub(arr) {
  let maxSum = 0;
  let partialSum = 0;
  
  for (let item of arr) {
    partialSum += item;
    maxSum = Math.max(maxSum, partialSum);
    
    if (partialSum < 0) partialSum = 0
  }
  
  return maxSum;
}

getMaxSumSub([-1, 2, 3, -9]); // 5
