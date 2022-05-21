// Write a function that checks if a given string (case insensitive) is a palindrome.

// function isPalindrome(x) {
//     let reversed = x.split("").reverse().join("")
//     if(x.toLowerCase() === reversed.toLowerCase()){
//       return true
//     } else {
//       return false
//     }
//   }


const isPalindrome = (x) => {
    return x.split("").reverse().join("").toLowerCase() === x.toLowerCase() ? true : false
  }
