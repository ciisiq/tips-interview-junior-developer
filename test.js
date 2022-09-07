function checkPalindrome(str) {
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];
  if (str[0] === str.slice(-1)) return checkPalindrome(str.slice(1, -1));
  return false;
}

// console.log(checkPalindrome("a"));
// console.log(checkPalindrome("matom"));
// console.log(checkPalindrome("rotor"));
// console.log(checkPalindrome("ab"));
console.log(checkPalindrome("repaper"));

console.log("Your name: Cintia Siqueira");

/* Write a recursive function that, given a number n, adds all the multiples of 3 up to that number
Example: addThrees(9) -> 18 */

function addMultiples(n, multiple) {
  // this how I stop the loop
  if (n === 0) {
    return 0;
  }

  if (n % multiple === 0) {
    // this how I  check if the n is multiple by 3
    return n + addMultiples(n - multiple, multiple); // this how I call back the function and start again
  } else {
    // and this is for when the n is not a multiple by 3, for to go the next number until get one valid
    return addMultiples(n - 1, multiple);
  }
}

console.log(addMultiples(20, 2));

// blackjack
