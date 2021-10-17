/*
Mutations
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string hello does not contain a y.

Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.
*/

function mutation(arr) {
  let word1 = arr[0].toLowerCase();
  let word2 = arr[1].toLowerCase();
  let matches = [];
  let i = 0;
  while ( i < word2.length) {
    if (word1.indexOf(word2[i]) === -1) {
      i++
    } else {
      matches.push(word2[i]);
      i++
    }
  }
  if (matches.length === word2.length) {
    return true
  } else {
    return false;
  }
}

mutation(["hello", "hey"]);
