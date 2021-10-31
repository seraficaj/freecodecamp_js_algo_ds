/*
We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
*/

function sumAll(arr) {
  let i = Math.min(...arr);
  let max = Math.max(...arr);
  let range = [];

  while (i <= max) {
    range.push(i);
    i++;
  }
  const sum = range.reduce((total, elem) => total + elem);

  return sum;
}
