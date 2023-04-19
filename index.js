function isPalindrome(word) {
  const string = word;
  const reverseString = word.split('').reverse('').join('')
  if(reverseString === string) {
    return true
  } else {
    return false
  }
}

/* 
  save original string into a variable.
  use split, reverse,  and join to make that string be read backwards,
  check value of backwards string with regular string and return boolean.
*/

/*
  I saved the parameter into a variable,
  then into another variable I first used .split() to split the string into an array of individual characters,
  then I used .reverse() to reverse the order in which that string is naturally read,
  then I used .join() to join together that backwards array into a string which i checked if it is equal 
  to the original string.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // I expect that running racecar will return true
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");
  // I expect that running robot will return false  
  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
