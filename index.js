function isPalindrome(word) {
  // Write your algorithm here
  return word === word.split("").reverse().join("")
}

/* 
  Add your pseudocode here
  1. Take the word and break it into an array of its individual characters
  2. Reverse the order of the array
  3. Join the reversed array back into a word i.e reversed word
  4. Compare the reversed word and the original word
*/

/*
  Add written explanation of your solution here
  
  The function takes a word, turns it into an array of its characters and then reverses it and joins it back into a word
  Then we compare the reversed word and the original word to check if it a palindrome
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
