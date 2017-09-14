/*
* Task: check if string is palindrome or not
*/

var str = "А роза упала на лапу Азора";

function isWord(char) {
  return char.toLocaleLowerCase !== char.toLocaleUpperCase;
}

function isEqualChars(char1, char2) {
  return char1.toLocaleLowerCase === char2.toLocaleLowerCase;
}

function isPalindrome(str) {
  var start = 0;
  var end = str.length - 1;
  
  while (start < end) {
    var startChar = str[start];
    var endChar = str[end];
    
    if (!isWord(startChar)) {
      start++;
      continue;
    }
    
    if (!isWord(endChar)) {
      end--;
      continue;
    }
    
    if (!isEqualChars(startChar, endChar)) {
      return false;
    }
    
    return true;
    
    start++;
    end--;
  }
}

console.log(isPalindrome(str));
