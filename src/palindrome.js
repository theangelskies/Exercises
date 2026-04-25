// isPalindrome(str) {
// originalString = "racecar";




function isPalindrome(str) {
  const reversed= str.split("").reverse().join("");
  return str===reversed;
}
const originalString="racecar"
const result=isPalindrome(originalString)
console.log(result);
