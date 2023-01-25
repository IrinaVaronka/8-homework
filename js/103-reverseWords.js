/*
Complete the solution so that it reverses all of the words 
within the string passed in.

Words are separated by exactly one space and there are 
no leading or trailing spaces.
*/

console.clear();

function reverseWords(str) {
    let reverseWord = str.split(' ').reverse().join(' ')

    return reverseWord;
  }
  console.log(reverseWords('The greatest victory'), '-->', 'victory greatest The');