/**
* Given an array, find it's max and min value.
* Find fastest way. Think of big arrays.
* @note: maximum size for numbers only arrays is ~120000.
*/

const numbers = [1, 10, 900, 0, 34, 66];


// Solutions, ordered from fastest to slowest
// 1. Standart loop (according to most benchmarks, for example: https://jsben.ch/dZHfx)
let max = numbers[0];
for (let i = 1; i < numbers.length; ++i) {
  if (numbers[i] > max) {
      max = numbers[i];
  }
}

// 2. Apply
Math.min.apply(Math, numbers);
Math.max.apply(Math, numbers);

let min = numbers[0];
for (let i = 1; i < numbers.length; ++i) {
  if (numbers[i] < min) {
      min = numbers[i];
  }
}

// 3. ES6
Math.min(...numbers);
Math.max(...numbers);

// 4. Reduce
numbers.reduce(function(a, b) {
    return Math.max(a, b);
});
numbers.reduce(function(a, b) {
    return Math.min(a, b);
});
