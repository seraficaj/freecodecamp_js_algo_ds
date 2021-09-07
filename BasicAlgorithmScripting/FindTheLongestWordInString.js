/*
Find the Longest Word in a String
Return the length of the longest word in the provided sentence.

Your response should be a number.
*/

function findLongestWordLength(str) {
  let maxLength = 0;

  str.split(" ").forEach(function(word) {
    if (word.length > maxLength) {
      maxLength = word.length;
    };
  })

  return maxLength;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
