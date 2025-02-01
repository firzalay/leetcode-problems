function isPalindrome(word) {
    for (let i = 0; i < word.length; i++) {
        for (let j = word.length - 1; j > 0; j--) {
            if (word[i] === word[j]) {
                return "Is Palindrome"
            } else {
                return "Not Palindrome"
            }
        }
    }
}

console.log(isPalindrome("nun"));
console.log(isPalindrome("rob"));
console.log(isPalindrome("bib"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("phone"));
