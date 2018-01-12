/*
* An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
* Task: create function which determines if string is isogram or not
*/

function isIsogram(str) {
  return !/(\w).*\1/i.test(str);
}

// Tests
isIsogram( "Dermatoglyphics" ) // true
isIsogram("isogram") // true
isIsogram( "aba" ) // false
isIsogram( "moOse" ) // false
