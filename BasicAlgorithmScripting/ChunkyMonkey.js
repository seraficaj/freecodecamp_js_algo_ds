/*
Chunky Monkey
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
*/

function chunkArrayInGroups(arr, size) {
  let chunked = [];
  for (let i = 0; i < arr.length; i+= size) {
    let chunk = arr.slice(i, i + size)
    chunked.push(chunk);
  }
  return chunked;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);