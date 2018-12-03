// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Solution 01 
// function reverse(str) {
//     const arr = str.split('');
//     arr.reverse();
//     return arr.join('');
// }

// Solution 01 Alternative
// function reverse(str) {
//   return str
//     .split('')
//     .reverse()
//     .join('');
// }

// Solution 02
// function reverse(str) {
//   let reversed = '';
//   for(let character of str){
//     reversed = character + reversed;
//   }

//   return  reversed;
// }

// Solution 03
function reverse(str) {
  return str.split('').reduce((rev, char) => char + rev , '');
}

module.exports = reverse;
