/**
 * Roman to Integer conversion
 * https://leetcode.com/problems/roman-to-integer/
 * @param {string} s
 * @return {number}
 */

const sym = { 
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000
}

var romanToInt = function(str) {
  let result = 0;
  
  for (let i=0; i < str.length; i++) {
    const current = sym[str[i]];
    const next = sym[str[i + 1]]
    
    if (current < next) {
      result += next - current;
      i++
    } else {
      result += current
    }
  }
  
  return result;
};
