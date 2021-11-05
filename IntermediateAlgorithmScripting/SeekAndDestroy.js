/*
Seek and Destroy
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Note: You have to use the arguments object.
*/

function destroyer(arr) {
  let initialArr = [...arguments][0];
  let otherArgs = [...arguments].slice(1);
  //filter through initial array and remove values
  const filtered = initialArr.filter(elem => 
     !otherArgs.includes(elem)
  )

  return filtered;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
