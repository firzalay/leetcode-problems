function isPalindrome(word) {
  for (let i = 0; i < word.length; i++) {
    for (let j = 0; j < word.length; j++) {
      if (word[i] === word[j]) {
        return "Is Palindrome"
      }
      break;
    }
  }
  return "Is Palindrome";
}


console.log(isPalindrome("nun"))
