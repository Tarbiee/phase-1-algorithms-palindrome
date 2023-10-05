function isPalindrome(word) {
  // Write your algorithm here
  return word === word.split('').reverse().join('');
}

/* 
  Add your pseudocode here
  First take the word which is of a string datatype
  Split the word so that you can get each character of the word as a string
  Reverse the splited chaacters
  Then join them to form the reversed word 
  Check for equality between the original word and splitted word
  Return true if they are equal else return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
