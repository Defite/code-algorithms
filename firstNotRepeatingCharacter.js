/*
* Task: Given a string s, find and return the first instance of a non-repeating character in it. 
* If there is no such character, return '_'.
*/

var string = 'abacabad';

function firstNotRepeatingCharacter(s) {
  for (var i = 0; i < s.length; i++) {
    var char = s.charAt(i);
    
    if (s.indexOf(char) == i && s.indexOf(char, i + 1) == -1) {
      return char;
    }
  }
  
  return '_';
}

console.log(firstNotRepeatingCharacter(string)); // 'c'
