// This function splits an array arr into smaller arrays ("chunks"), each of size n.
// It returns a 2D array, where each inner array is a chunk of the original.
const arr = [1, 2, 3, 4, 5, 6, 7];
const n = 2;



function chunkArray(arr, n) {
  const result = [];
  for (let i = 0; i < arr.length; i += n) {
    result.push(arr.slice(i, i + n));
  }
  return result;
}

const result = chunkArray(arr, n);
console.log(result);
 // op = [[1, 2, 3], [4, 5, 6], [7]]

//  What slice(start, end) does:
// The slice() method returns a shallow copy of a portion of an array into a new array object.
//  It does not modify the original array.

// arr.slice(start, end) returns elements from index start up to, but not including end.
